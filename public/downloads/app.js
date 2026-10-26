/**
 * The tool page's client. No framework, no build step: this file is served
 * as-is from `/downloads/app.js`.
 *
 * The server is the authority on URLs, quotas and errors. This script only
 * keeps the form usable, shows the queue position, and renders the result
 * with `textContent` (never `innerHTML`) because the title comes from whatever
 * the platform published.
 */
(() => {
  const root = document.getElementById('dl-tool');
  if (!root) return;

  const lang = document.documentElement.lang === 'en' ? 'en' : 'vi';
  const STRINGS = {
    vi: {
      button: 'Tải video',
      working: 'Đang gửi...',
      submitting: 'Đang gửi yêu cầu...',
      queued: (n) => `Đang xếp hàng — vị trí ${n}.`,
      running: 'Đang tải video...',
      done: 'Xong. Bấm nút bên dưới để tải về.',
      expired: 'Link đã hết hạn. Hãy gửi lại video.',
      badUrl: 'Link chưa đúng, hoặc nền tảng này chưa được hỗ trợ.',
      turnstile: 'Chưa xác minh được. Hãy tải lại trang và thử lại.',
      rate: 'Bạn đã dùng hết lượt trong giờ này. Thử lại sau ít phút.',
      daily: 'Hết lượt hôm nay. Mai thử lại sau 0:00.',
      queueFull: 'Hàng đợi đang đầy. Thử lại sau một phút.',
      offline: 'Máy chủ tải đang nghỉ. Thử lại sau.',
      maintenance: 'Công cụ đang tạm dừng. Thử lại sau.',
      network: 'Mất kết nối. Kiểm tra mạng và thử lại.',
      generic: 'Có lỗi xảy ra. Thử lại sau.',
      tooLong: 'Video dài quá 20 phút.',
      tooLarge: 'Video lớn quá 95MB.',
      blocked: 'Nền tảng từ chối video này.',
      needsCookies: 'Nguồn này cần đăng nhập nên chưa tải được.',
      live: 'Không hỗ trợ livestream.',
      playlist: 'Không hỗ trợ playlist.',
      badMedia: 'File tải về không phải video hợp lệ.',
      timeout: 'Video xử lý quá lâu. Thử lại hoặc chọn video ngắn hơn.',
      download: 'Tải file về máy',
      file: 'File',
      expiry: (m) => `Link còn ${m} phút.`,
      offlineBanner: 'Máy chủ tải đang nghỉ. Bạn vẫn có thể xem trang, nhưng chưa gửi được video.',
      pausedBanner: 'Công cụ đang tạm dừng nhận video mới.',
      turnstileMissing: 'Không tải được ô xác minh. Hãy tắt trình chặn quảng cáo rồi tải lại trang.',
    },
    en: {
      button: 'Download video',
      working: 'Sending...',
      submitting: 'Sending request...',
      queued: (n) => `Queued — position ${n}.`,
      running: 'Downloading...',
      done: 'Done. Use the button below to save the file.',
      expired: 'This link has expired. Submit the video again.',
      badUrl: 'That link is not valid, or this platform is not supported.',
      turnstile: 'Verification did not complete. Reload the page and try again.',
      rate: 'You have used this hour’s allowance. Try again shortly.',
      daily: 'Today’s allowance is used up. Try again after 00:00.',
      queueFull: 'The queue is full. Try again in a minute.',
      offline: 'The download machine is offline. Try again later.',
      maintenance: 'The tool is paused. Try again later.',
      network: 'Connection lost. Check your network and try again.',
      generic: 'Something went wrong. Try again later.',
      tooLong: 'The video is longer than 20 minutes.',
      tooLarge: 'The video is larger than 95MB.',
      blocked: 'The platform refused this video.',
      needsCookies: 'This source needs a login, so it cannot be downloaded yet.',
      live: 'Livestreams are not supported.',
      playlist: 'Playlists are not supported.',
      badMedia: 'The downloaded file is not a valid video.',
      timeout: 'The video took too long to process. Try again or pick a shorter one.',
      download: 'Save the file',
      file: 'File',
      expiry: (m) => `Link expires in ${m} minutes.`,
      offlineBanner: 'The download machine is offline. You can browse, but new jobs cannot start.',
      pausedBanner: 'The tool is not accepting new videos right now.',
      turnstileMissing: 'The verification widget did not load. Disable ad-blocking and reload.',
    },
  };
  const t = STRINGS[lang];

  const tool = document.getElementById('dl-tool');
  const form = document.getElementById('dl-form');
  const input = document.getElementById('dl-url');
  const submit = document.getElementById('dl-submit');
  const status = document.getElementById('dl-status');
  const result = document.getElementById('dl-result');
  const banner = document.getElementById('dl-banner');
  const turnstileBox = document.getElementById('dl-turnstile');
  const siteKey = turnstileBox?.dataset.sitekey || '';

  let token = '';
  let jobId = sessionStorage.getItem('dl-job') || '';
  let pollTimer = null;
  let pollStarted = 0;
  let busy = false;
  let serverOnline = true;

  function setStage(stage) {
    if (!tool) return;
    tool.dataset.stage = stage;
    const items = [...document.querySelectorAll('.dl-timeline li')];
    const order = ['queued', 'running', 'done'];
    const index = order.indexOf(stage);
    for (const [position, item] of items.entries()) {
      item.classList.toggle('is-done', stage === 'done' || (index >= 0 && position < index));
      item.classList.toggle('is-active', index === position && index >= 0);
      item.classList.toggle('is-error', stage === 'error' && position === 0);
    }
  }

  function writeStatus(message, kind = '') {
    status.textContent = message;
    status.dataset.kind = kind;
  }

  function updateSubmit() {
    submit.disabled = busy || !serverOnline || !token || !input.value.trim();
    submit.textContent = busy ? t.working : t.button;
  }

  function resetTurnstile() {
    token = '';
    if (window.turnstile && turnstileBox) window.turnstile.reset(turnstileBox);
    updateSubmit();
  }

  function errorText(code) {
    switch (code) {
      case 'IP_HOURLY':
      case 'IP_DAILY': return t.rate;
      case 'DAILY_LIMIT': return t.daily;
      case 'QUEUE_FULL': return t.queueFull;
      case 'WORKER_OFFLINE': return t.offline;
      case 'MAINTENANCE': return t.maintenance;
      case 'TURNSTILE_FAILED': return t.turnstile;
      case 'BAD_URL':
      case 'UNSUPPORTED':
      case 'NOT_A_VIDEO': return t.badUrl;
      case 'TOO_LONG': return t.tooLong;
      case 'TOO_LARGE': return t.tooLarge;
      case 'BLOCKED': return t.blocked;
      case 'NEEDS_COOKIES': return t.needsCookies;
      case 'LIVE': return t.live;
      case 'PLAYLIST': return t.playlist;
      case 'BAD_MEDIA': return t.badMedia;
      case 'TIMEOUT': return t.timeout;
      default: return t.generic;
    }
  }

  function bytes(value) {
    const size = Number(value || 0);
    if (!size) return '';
    if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  function showResult(data) {
    result.hidden = false;
    const preview = document.getElementById('dl-preview');
    document.getElementById('dl-file-name').textContent = data.fileName || '';
    document.getElementById('dl-file-meta').textContent = [bytes(data.size), data.duration ? `${Math.round(data.duration)}s` : ''].filter(Boolean).join(' · ');
    const link = document.getElementById('dl-file-link');
    const href = typeof data.downloadUrl === 'string' && data.downloadUrl.startsWith('/api/file/')
      ? data.downloadUrl
      : '';
    link.href = href;
    link.textContent = t.download;
    link.hidden = !href;

    if (preview) {
      if (href) {
        preview.src = `${href}${href.includes('?') ? '&' : '?'}inline=1`;
        preview.hidden = false;
        preview.load();
      } else {
        preview.removeAttribute('src');
        preview.hidden = true;
      }
    }

    const minutes = data.expiresAt ? Math.max(0, Math.round((data.expiresAt - Date.now()) / 60000)) : 0;
    document.getElementById('dl-expiry').textContent = minutes > 0 ? t.expiry(minutes) : '';
    setStage('done');
    writeStatus(t.done, 'ok');
  }

  function clearResult() {
    result.hidden = true;
    const preview = document.getElementById('dl-preview');
    if (preview) {
      preview.pause();
      preview.removeAttribute('src');
      preview.load();
      preview.hidden = true;
    }
    document.getElementById('dl-file-name').textContent = '';
    document.getElementById('dl-file-meta').textContent = '';
    document.getElementById('dl-expiry').textContent = '';
  }

  function stopPolling() {
    if (pollTimer) clearTimeout(pollTimer);
    pollTimer = null;
  }

  async function poll() {
    stopPolling();
    if (!jobId) return;
    if (!pollStarted) pollStarted = Date.now();
    if (Date.now() - pollStarted > 10 * 60 * 1000) {
      setStage('error');
      writeStatus(t.expired, 'error');
      sessionStorage.removeItem('dl-job');
      jobId = '';
      return;
    }
    try {
      const response = await fetch(`/api/jobs/${jobId}`, { cache: 'no-store' });
      if (response.status === 404) {
        setStage('error');
        writeStatus(t.expired, 'error');
        sessionStorage.removeItem('dl-job');
        jobId = '';
        return;
      }
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStage('error');
        writeStatus(errorText(data?.error?.code), 'error');
        return;
      }
      if (data.status === 'queued') {
        setStage('queued');
        writeStatus(t.queued(data.position || 1));
      } else if (data.status === 'running') {
        setStage('running');
        writeStatus(t.running);
      } else if (data.status === 'done') {
        showResult(data);
        sessionStorage.removeItem('dl-job');
        jobId = '';
        return;
      } else if (data.status === 'expired') {
        setStage('error');
        writeStatus(t.expired, 'error');
        sessionStorage.removeItem('dl-job');
        jobId = '';
        return;
      } else if (data.status === 'error') {
        setStage('error');
        writeStatus(errorText(data.error), 'error');
        sessionStorage.removeItem('dl-job');
        jobId = '';
        return;
      }
      pollTimer = setTimeout(poll, 2000);
    } catch {
      pollTimer = setTimeout(poll, 5000);
    }
  }

  async function checkServer() {
    try {
      const response = await fetch('/api/status', { cache: 'no-store' });
      const data = await response.json();
      if (!data.enabled) {
        serverOnline = false;
        banner.hidden = false;
        banner.textContent = t.pausedBanner;
      } else if (!data.online) {
        serverOnline = false;
        banner.hidden = false;
        banner.textContent = t.offlineBanner;
      } else {
        serverOnline = true;
        banner.hidden = true;
      }
    } catch {
      serverOnline = true;
      banner.hidden = true;
    }
    updateSubmit();
  }

  function renderTurnstile() {
    if (!siteKey) return;
    if (!window.turnstile) {
      setTimeout(renderTurnstile, 200);
      return;
    }
    window.turnstile.render(turnstileBox, {
      sitekey: siteKey,
      action: 'download',
      theme: 'auto',
      callback: (value) => {
        token = value;
        updateSubmit();
      },
      'expired-callback': () => {
        token = '';
        updateSubmit();
      },
      'error-callback': () => {
        token = '';
        updateSubmit();
      },
    });
  }

  input.addEventListener('input', updateSubmit);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;
    const url = input.value.trim();
    if (!/^https?:\/\//i.test(url)) {
      setStage('error');
      writeStatus(t.badUrl, 'error');
      return;
    }
    await checkServer();
    if (!serverOnline) {
      setStage('error');
      writeStatus(t.offline, 'error');
      return;
    }
    if (!token) {
      setStage('error');
      writeStatus(t.turnstile, 'error');
      return;
    }
    clearResult();
    busy = true;
    updateSubmit();
    setStage('queued');
    writeStatus(t.submitting);

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url, turnstileToken: token }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStage('error');
        writeStatus(errorText(data?.error?.code), 'error');
        busy = false;
        resetTurnstile();
        updateSubmit();
        return;
      }
      jobId = data.id;
      sessionStorage.setItem('dl-job', jobId);
      pollStarted = 0;
      setStage('queued');
      writeStatus(t.queued(data.position || 1));
      busy = false;
      resetTurnstile();
      updateSubmit();
      poll();
    } catch {
      busy = false;
      setStage('error');
      writeStatus(t.network, 'error');
      resetTurnstile();
      updateSubmit();
    }
  });

  setTimeout(() => {
    if (!window.turnstile) writeStatus(t.turnstileMissing, 'error');
  }, 10000);

  setStage('idle');
  renderTurnstile();
  updateSubmit();
  checkServer();
  if (jobId) poll();
})();
