/**
 * The URL allowlist, mirrored from `shortGPT/sources/*`.
 *
 * The Python side is authoritative: the worker runs `registry.preflight`
 * before it touches a network. This file exists so a bad paste is refused
 * before it consumes a queue slot, and so the public endpoint never hands the
 * home machine a URL it should not fetch.
 *
 * Host matching is exact-or-subdomain, never a substring. `youtube.com.evil.com`
 * and `evil.com/youtube.com` must both fail; the tests in
 * `tests/downloads-urls.test.mjs` are the reason.
 */
import { isIpLiteral } from './http.js';

const SOURCES = [
  {
    key: 'youtube',
    label: 'YouTube',
    hosts: ['youtube.com', 'youtu.be', 'youtube-nocookie.com'],
    patterns: [
      /youtu\.be\/[A-Za-z0-9_-]{6,}/,
      /youtube(?:-nocookie)?\.com\/(?:watch\?|shorts\/|embed\/|live\/|v\/)/,
    ],
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    hosts: ['tiktok.com'],
    patterns: [/\/video\/\d{6,}/, /\/t\/[A-Za-z0-9]+/],
  },
  {
    key: 'douyin',
    label: 'Douyin',
    hosts: ['douyin.com', 'iesdouyin.com'],
    patterns: [
      /\/(?:share\/)?video\/\d{6,}/,
      /[?&]modal_id=\d{6,}/,
      /^https?:\/\/v\.douyin\.com\/[A-Za-z0-9_-]{4,}/,
    ],
  },
  {
    key: 'bilibili',
    label: 'Bilibili',
    hosts: ['bilibili.tv', 'bilibili.com'],
    patterns: [
      /bilibili\.tv\/(?:[a-z]{2}\/)?video\/\d+/,
      /bilibili\.tv\/(?:[a-z]{2}\/)?play\/\d+\/\d+/,
      /bilibili\.com\/video\/(?:BV[0-9A-Za-z]{8,}|av\d+)/i,
      /bilibili\.com\/bangumi\/play\/ep\d+/i,
    ],
  },
  {
    key: 'hongguo',
    label: 'Hongguoduanju',
    hosts: ['hongguoduanju.com'],
    patterns: [/\/player\/\d{6,}/],
  },
  {
    key: 'iq',
    label: 'iQiyi',
    hosts: ['iq.com', 'iqiyi.com'],
    patterns: [/\/play\/(?:[\w%-]+-)?\w{6,}/],
  },
];

/** The source that owns a host, or null. */
export function sourceForHost(hostname) {
  return SOURCES.find((source) =>
    source.hosts.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    ),
  ) || null;
}

/**
 * Validate and normalise one pasted URL.
 *
 * Returns `{ ok: true, url, host, source }` or `{ ok: false, code }`. The code
 * is deliberately coarse; the page has its own words for each case.
 */
export function normalizeUrl(raw) {
  if (typeof raw !== 'string') return { ok: false, code: 'BAD_URL' };
  const text = raw.trim();
  if (!text || text.length > 2048) return { ok: false, code: 'BAD_URL' };

  let parsed;
  try {
    parsed = new URL(text);
  } catch {
    return { ok: false, code: 'BAD_URL' };
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { ok: false, code: 'BAD_URL' };
  }
  if (parsed.username || parsed.password) return { ok: false, code: 'BAD_URL' };
  // A non-default port is not something any of these sites publishes. Refusing
  // it also closes an SSRF trick (`https://youtube.com:8080/...`).
  if (parsed.port) return { ok: false, code: 'BAD_URL' };

  const host = parsed.hostname.toLowerCase();
  // A trailing dot is the same DNS name to a resolver but not to the Python
  // matcher; accepting it here would only create a job the worker refuses.
  if (!host || host.endsWith('.') || isIpLiteral(host)) {
    return { ok: false, code: 'BAD_URL' };
  }

  const source = sourceForHost(host);
  if (!source) return { ok: false, code: 'UNSUPPORTED' };

  const href = parsed.toString();
  // TikTok's phone share links (vm./vt.) carry no video id in the path; the
  // Python source accepts them and resolves the redirect itself.
  const shortTikTok = source.key === 'tiktok'
    && (host.startsWith('vm.') || host.startsWith('vt.'))
    && parsed.pathname !== '/';
  if (!shortTikTok && !source.patterns.some((pattern) => pattern.test(href))) {
    return { ok: false, code: 'UNSUPPORTED' };
  }

  // A channel or a playlist is a list, not one file. The Python side has the
  // final word; these are the shapes that are unambiguous.
  if (/youtube\.com\/(?:@|c\/|user\/|channel\/|playlist)/.test(href)) {
    return { ok: false, code: 'NOT_A_VIDEO' };
  }

  return { ok: true, url: href, host, source: source.key, label: source.label };
}
