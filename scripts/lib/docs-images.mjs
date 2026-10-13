/**
 * Where a documentation screenshot actually is.
 *
 * The topic files name a picture the readable way — `/docs-img/video-ngan-01-screen-vi.webp`
 * — and what is on disk carries a short content hash: `/docs-img/video-ngan-01-screen-vi.9f3a1c2e.webp`.
 * This resolves one to the other.
 *
 * **Why the hash exists, and what it cost to find out.** `public/_headers` gives
 * every `.webp` on the site a year of `immutable`, which is right for a logo and
 * wrong for a screenshot: a screenshot is re-taken when the interface moves, at
 * the same address, so everybody who has been to the docs before keeps being
 * shown the old one. The first attempt at fixing that was a `/docs-img/*` rule
 * with a short `max-age`, and Cloudflare Pages **merged** it rather than letting
 * it win:
 *
 *     Cache-Control: public, max-age=31536000, immutable, public, max-age=86400
 *
 * Two `max-age` directives on one response is not a valid header, and browsers
 * take the first — so the rule did nothing and made the answer worse. That was
 * measured with `curl -I` against the live site on 2026-10-13, which is the
 * check the old comment said to do and which had not been done.
 *
 * A content hash makes `immutable` *true* instead of fought: the address of a
 * picture changes when the picture does, so a year of caching is correct and
 * the reader gets the new one as soon as the page mentions it. The alternative
 * — renaming by hand on every re-shoot — is a step somebody forgets, and a
 * stale screenshot is invisible until a customer points at it.
 *
 * Both callers use this: `build-docs.mjs` to write the `src`, and
 * `verify-build.mjs` to check the file is there. Two copies of a lookup is two
 * answers to "does this picture exist", and the build would pass while the page
 * 404ed.
 */
import { readdirSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const listing = new Map();

/** Every file in a directory, cached for the life of the process. */
function filesIn(folder) {
  if (!listing.has(folder)) {
    let names = [];
    try {
      names = readdirSync(folder);
    } catch {
      names = [];
    }
    listing.set(folder, names);
  }
  return listing.get(folder);
}

/**
 * `/docs-img/name.webp` -> `/docs-img/name.<hash>.webp`, or the input unchanged
 * when there is no hashed file (which `verify` then reports as a missing
 * picture rather than as a mystery).
 *
 * `publicDir` is the site's `public/`, so the caller says where the site is
 * rather than this module guessing.
 */
export function resolveDocImage(publicDir, src) {
  if (typeof src !== 'string' || !src.startsWith('/docs-img/')) return src;
  const name = basename(src);
  const dot = name.lastIndexOf('.');
  if (dot < 0) return src;
  const stem = name.slice(0, dot);
  const ext = name.slice(dot);
  // Already hashed, or deliberately named that way.
  const hashed = filesIn(join(publicDir, 'docs-img'))
    .filter((one) => one.startsWith(`${stem}.`) && one.endsWith(ext));
  if (!hashed.length) return src;
  if (hashed.includes(name)) return src;
  return `${dirname(src)}/${hashed.sort()[0]}`;
}
