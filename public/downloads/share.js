/* The page behind a transfer QR.
 *
 * It is deliberately read-only and account-free: the id in the query is the
 * only key, the API returns the tokenised file URL, and the page shows a
 * preview and one Download button. Links expire with the job.
 */
(() => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'vi';
  const STRINGS = {
    vi: {
      loading: 'Đang kiểm tra file…',
      ready: 'File đã sẵn sàng',
      meta: (size, duration) => [size, duration].filter(Boolean).join(' · '),
      download: 'Download',
      expiry: (m) => `Link còn ${m} phút.`,
      expired: 'Link đã hết hạn hoặc file đã bị xoá.',
      disabled: 'Tính năng gửi file đang tạm tắt.',
      missing: 'Không tìm thấy file.',
      again: 'Tải video khác miễn phí',
      sent: 'Được gửi từ AutoReel',
    },
    en: {
      loading: 'Checking the file…',
      ready: 'The file is ready',
      meta: (size, duration) => [size, duration].filter(Boolean).join(' · '),
      download: 'Download',
      expiry: (m) => `Link expires in ${m} minutes.`,
      expired: 'This link has expired or the file has been removed.',
      disabled: 'File transfer is turned off right now.',
      missing: 'File not found.',
      again: 'Download another video free',
      sent: 'Sent from AutoReel',
    },
  };
  const t = STRINGS[lang];
  const title = document.getElementById('share-title');
  const status = document.getElementById('share-status');
  const meta = document.getElementById('share-meta');
  const link = document.getElementById('share-download');
  const preview = document.getElementById('share-preview');
  const expiry = document.getElementById('share-expiry');
  const again = document.getElementById('share-again');
  const empty = document.getElementById('share-empty');

  const id = new URLSearchParams(location.search).get('id') || '';
  if (!/^[a-f0-9]{32}$/.test(id)) {
    status.textContent = t.missing;
    empty.hidden = false;
    return;
  }

  const bytes = (value) => {
    const size = Number(value || 0);
    if (!size) return '';
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  function showExpired(message) {
    status.textContent = message;
    empty.hidden = false;
  }

  async function load() {
    // A transfer link is a delivery route, not a copy: turning sharing off in
    // the dashboard closes old links too, without touching the files.
    try {
      const flagsResponse = await fetch('/api/status', { cache: 'no-store' });
      if (flagsResponse.ok) {
        const flags = await flagsResponse.json();
        if (flags.share === false) {
          showExpired(t.disabled);
          return;
        }
      }
    } catch {
      // The job request below reports the same failures.
    }
    fetch(`/api/jobs/${id}`, { cache: 'no-store' })
      .then(async (response) => {
        if (response.status === 404) {
          showExpired(t.missing);
          return null;
        }
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          showExpired(t.missing);
          return null;
        }
        if (data.status !== 'done' || !data.downloadUrl) {
          showExpired(t.expired);
          return null;
        }
        return data;
      })
      .then((data) => {
        if (!data) return;
        title.textContent = data.fileName || t.ready;
        status.textContent = t.sent;
        meta.textContent = t.meta(bytes(data.size), data.duration ? `${Math.round(data.duration)}s` : '');
        link.href = data.downloadUrl;
        link.hidden = false;

        const minutes = data.expiresAt
          ? Math.max(0, Math.round((data.expiresAt - Date.now()) / 60000))
          : 0;
        expiry.textContent = minutes > 0 ? t.expiry(minutes) : '';

        const inline = `${data.downloadUrl}${data.downloadUrl.includes('?') ? '&' : '?'}inline=1`;
        if (data.kind === 'cover' || /^image\//.test(data.fileMime || '')) {
          const img = document.createElement('img');
          img.src = inline;
          img.alt = '';
          img.style.cssText = 'width:100%;max-width:420px;border-radius:14px;border:1px solid var(--line)';
          preview.append(img);
        } else if (data.kind === 'audio' || /^audio\//.test(data.fileMime || '')) {
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = inline;
          audio.style.cssText = 'width:100%;max-width:520px';
          preview.append(audio);
        } else if (data.kind === 'subtitle'
          || /x-subrip/.test(data.fileMime || '')) {
          // A subtitle is text; a <video> pointed at it is a control that can
          // never play. The download button above is the whole page for it.
        } else {
          const video = document.createElement('video');
          video.controls = true;
          video.playsInline = true;
          video.preload = 'metadata';
          video.src = inline;
          video.style.cssText = 'width:100%;max-height:420px;border-radius:14px;background:#000';
          preview.append(video);
        }
      })
      .catch(() => showExpired(t.expired));
  }

  load();

  if (again) {
    again.href = lang === 'en' ? '/en/downloads/' : '/downloads/';
    again.textContent = t.again;
  }
})();
