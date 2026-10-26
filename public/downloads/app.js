/**
 * The tool page's client. No framework, no build step: this file is served
 * as-is from `/downloads/app.js`.
 *
 * The server is the authority on URLs, quotas and errors. This script only
 * keeps the form usable, shows each video's queue position, and renders the
 * results with `textContent` (never `innerHTML`) because titles come from
 * whatever the platform published.
 *
 * One submission may carry several links. The page treats them as a list of
 * independent jobs: one row per video, each with its own status and download
 * button, all polled together.
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
      badUrlAt: (n) => `Link ở dòng ${n} chưa đúng hoặc chưa được hỗ trợ.`,
      batchMax: (n) => `Mỗi lần chỉ gửi được tối đa ${n} link.`,
      hint: 'Mỗi dòng một link.',
      hintMax: (n) => `Tối đa ${n} link mỗi lần.`,
      allQueued: (n) => `Đã gửi ${n} video — đang xếp hàng.`,
      progress: (done, total) => `${done}/${total} video xong — đang xử lý tiếp...`,
      allDone: (n) => `${n} video đã xong. Bấm nút để tải về.`,
      allFailed: (n) => `${n} video đều lỗi. Thử lại với link khác.`,
      someFailed: (done, failed) => `${done} video xong, ${failed} video lỗi.`,
      videoN: (n) => `Video ${n}`,
      waiting: 'Đang chờ...',
      preview: 'Xem trước',
      hidePreview: 'Ẩn',
      turnstile: 'Chưa xác minh được. Hãy tải lại trang và thử lại.',
      rate: 'Bạn đã dùng hết lượt trong giờ này. Thử lại sau ít phút.',
      rateRemaining: (n) => `Bạn còn ${n} lượt trong giờ này. Bớt link rồi thử lại.`,
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
      badUrlAt: (n) => `Line ${n} is not a valid link, or its platform is not supported.`,
      batchMax: (n) => `You can send at most ${n} links at a time.`,
      hint: 'One link per line.',
      hintMax: (n) => `Up to ${n} links per submission.`,
      allQueued: (n) => `${n} videos sent — queued.`,
      progress: (done, total) => `${done}/${total} videos finished — still working...`,
      allDone: (n) => `${n} videos finished. Use the buttons to save them.`,
      allFailed: (n) => `All ${n} videos failed. Try other links.`,
      someFailed: (done, failed) => `${done} finished, ${failed} failed.`,
      videoN: (n) => `Video ${n}`,
      waiting: 'Waiting...',
      preview: 'Preview',
      hidePreview: 'Hide',
      turnstile: 'Verification did not complete. Reload the page and try again.',
      rate: 'You have used this hour’s allowance. Try again shortly.',
      rateRemaining: (n) => `You have ${n} left this hour. Remove some links and try again.`,
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
  const results = document.getElementById('dl-results');
  const hint = document.getElementById('dl-batch-hint');
  const banner = document.getElementById('dl-banner');
  const turnstileBox = document.getElementById('dl-turnstile');
  const siteKey = turnstileBox?.dataset.sitekey || '';

  const SESSION_KEY = 'dl-jobs';
  const POLL_MS = 2000;
  const MAX_POLL_MS = 30 * 60 * 1000;

  let token = '';
  let batchMax = 5;
  let jobs = loadSessionJobs();
  const state = new Map();
  let pollTimer = null;
  let pollStarted = 0;
  let busy = false;
  let serverOnline = true;

  function loadSessionJobs() {
    try {
      const stored = JSON.parse(sessionStorage.getItem(SESSION_KEY) || '[]');
      if (!Array.isArray(stored)) return [];
      return stored
        .filter((id) => typeof id === 'string' && /^[a-f0-9]{32}$/.test(id))
        .map((id) => ({ id }));
    } catch {
      return [];
    }
  }

  function saveSession() {
    try {
      if (jobs.length === 0) sessionStorage.removeItem(SESSION_KEY);
      else sessionStorage.setItem(SESSION_KEY, JSON.stringify(jobs.map((job) => job.id)));
    } catch {
      // A private window can refuse storage; the page still works in-memory.
    }
  }

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

  function updateHint() {
    if (hint) hint.textContent = `${t.hint} ${t.hintMax(batchMax)}`;
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

  /* ------------------------------------------------------------ results */

  function clearResults() {
    jobs = [];
    state.clear();
    results.textContent = '';
    results.hidden = true;
    saveSession();
  }

  function buildRows() {
    results.textContent = '';
    jobs.forEach((job, index) => {
      const li = document.createElement('li');
      li.className = 'dl-job';
      li.dataset.id = job.id;

      const number = document.createElement('span');
      number.className = 'dl-job-num';
      number.textContent = String(index + 1);

      const body = document.createElement('div');
      body.className = 'dl-job-body';
      const name = document.createElement('strong');
      name.className = 'dl-job-name';
      const line = document.createElement('span');
      line.className = 'dl-job-status';
      const meta = document.createElement('span');
      meta.className = 'dl-job-meta';
      const expiry = document.createElement('span');
      expiry.className = 'dl-job-expiry';
      body.append(name, line, meta, expiry);

      const actions = document.createElement('div');
      actions.className = 'dl-job-actions';

      li.append(number, body, actions);
      results.append(li);
    });
    results.hidden = jobs.length === 0;
  }

  function renderRows() {
    if (jobs.length === 0) {
      results.textContent = '';
      results.hidden = true;
      return;
    }
    const ids = [...results.children].map((row) => row.dataset.id);
    if (ids.length !== jobs.length || jobs.some((job, index) => ids[index] !== job.id)) {
      buildRows();
    }
    jobs.forEach((job, index) => updateRow(results.children[index], job, index));
  }

  function updateRow(row, job, index) {
    const slot = state.get(job.id) || {};
    const data = slot.data || {};
    const href = typeof data.downloadUrl === 'string' && data.downloadUrl.startsWith('/api/file/')
      ? data.downloadUrl
      : '';
    const name = row.querySelector('.dl-job-name');
    const line = row.querySelector('.dl-job-status');
    const meta = row.querySelector('.dl-job-meta');
    const expiry = row.querySelector('.dl-job-expiry');
    const actions = row.querySelector('.dl-job-actions');

    line.dataset.kind = '';
    meta.textContent = '';
    expiry.textContent = '';
    name.textContent = t.videoN(index + 1);

    if (slot.status === 'done' && href) {
      name.textContent = data.fileName || t.videoN(index + 1);
      line.textContent = t.done;
      line.dataset.kind = 'ok';
      meta.textContent = [
        bytes(data.size),
        data.duration ? `${Math.round(data.duration)}s` : '',
      ].filter(Boolean).join(' · ');
      const minutes = data.expiresAt
        ? Math.max(0, Math.round((data.expiresAt - Date.now()) / 60000))
        : 0;
      expiry.textContent = minutes > 0 ? t.expiry(minutes) : '';

      let link = actions.querySelector('a');
      if (!link) {
        link = document.createElement('a');
        link.className = 'ar-btn ar-btn-primary dl-download';
        link.textContent = t.download;
        actions.append(link);

        const previewButton = document.createElement('button');
        previewButton.type = 'button';
        previewButton.className = 'ar-btn ar-btn-secondary dl-job-preview';
        previewButton.textContent = t.preview;
        previewButton.addEventListener('click', () => togglePreview(row, job));
        actions.append(previewButton);
      }
      link.href = href;
    } else if (slot.status === 'queued') {
      line.textContent = t.queued(data.position || 1);
    } else if (slot.status === 'running') {
      line.textContent = t.running;
    } else if (slot.status === 'expired') {
      line.textContent = t.expired;
      line.dataset.kind = 'error';
    } else if (slot.status === 'error') {
      line.textContent = errorText(slot.error || data.error);
      line.dataset.kind = 'error';
    } else {
      line.textContent = t.waiting;
    }
  }

  function togglePreview(row, job) {
    let video = row.querySelector('video');
    const button = row.querySelector('.dl-job-preview');
    const href = state.get(job.id)?.data?.downloadUrl;
    if (typeof href !== 'string' || !href.startsWith('/api/file/')) return;

    if (!video) {
      video = document.createElement('video');
      video.className = 'dl-preview';
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.hidden = true;
      row.append(video);
    }

    if (!video.src) {
      video.src = `${href}${href.includes('?') ? '&' : '?'}inline=1`;
    }
    video.hidden = !video.hidden;
    if (video.hidden) video.pause();
    if (button) button.textContent = video.hidden ? t.preview : t.hidePreview;
  }

  /* ------------------------------------------------------------- polling */

  function isActive(job) {
    const value = state.get(job.id)?.status;
    return value !== 'done' && value !== 'error' && value !== 'expired';
  }

  function summarize() {
    let done = 0;
    let failed = 0;
    let running = 0;
    for (const job of jobs) {
      const value = state.get(job.id)?.status;
      if (value === 'done') done += 1;
      else if (value === 'error' || value === 'expired') failed += 1;
      else if (value === 'running') running += 1;
    }
    return { done, failed, running, total: jobs.length, active: jobs.length - done - failed };
  }

  function renderOverall() {
    if (jobs.length === 0) return;
    const { done, failed, running, total, active } = summarize();
    if (active === 0) {
      setStage(done > 0 ? 'done' : 'error');
      if (failed === 0) writeStatus(t.allDone(done), 'ok');
      else if (done === 0) writeStatus(t.allFailed(failed), 'error');
      else writeStatus(t.someFailed(done, failed), 'error');
      return;
    }
    setStage(running > 0 ? 'running' : 'queued');
    writeStatus(active === total ? t.allQueued(total) : t.progress(done, total));
  }

  function stopPolling() {
    if (pollTimer) clearTimeout(pollTimer);
    pollTimer = null;
  }

  async function poll() {
    stopPolling();
    if (jobs.length === 0) return;
    if (!pollStarted) pollStarted = Date.now();
    if (Date.now() - pollStarted > MAX_POLL_MS) {
      for (const job of jobs) {
        if (isActive(job)) state.set(job.id, { status: 'error', error: 'TIMEOUT' });
      }
      renderRows();
      renderOverall();
      saveSession();
      return;
    }

    await Promise.all(jobs.filter(isActive).map(async (job) => {
      try {
        const response = await fetch(`/api/jobs/${job.id}`, { cache: 'no-store' });
        if (response.status === 404) {
          state.set(job.id, { status: 'expired' });
          return;
        }
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          state.set(job.id, { status: 'error', error: data?.error?.code || 'FAILED' });
          return;
        }
        state.set(job.id, { status: data.status, data });
      } catch {
        // Keep the row as it was; the next tick tries again.
      }
    }));

    renderRows();
    renderOverall();

    if (jobs.some(isActive)) {
      pollTimer = setTimeout(poll, POLL_MS);
    } else {
      // Keep the ids so a reload can restore the links while they last.
      saveSession();
    }
  }

  async function checkServer() {
    try {
      const response = await fetch('/api/status', { cache: 'no-store' });
      const data = await response.json();
      if (Number.isFinite(Number(data.batchMax)) && Number(data.batchMax) >= 1) {
        batchMax = Math.min(5, Math.trunc(Number(data.batchMax)));
        updateHint();
      }
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

  function submittedUrls() {
    return input.value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  input.addEventListener('input', updateSubmit);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;

    const urls = submittedUrls();
    if (urls.length === 0) {
      setStage('error');
      writeStatus(t.badUrl, 'error');
      return;
    }
    if (!urls.every((url) => /^https?:\/\//i.test(url))) {
      setStage('error');
      writeStatus(t.badUrl, 'error');
      return;
    }

    // Status first: an operator may have lowered the batch size since this
    // page was opened, and the local check must use the current cap.
    await checkServer();
    if (!serverOnline) {
      setStage('error');
      writeStatus(t.offline, 'error');
      return;
    }
    if (urls.length > batchMax) {
      setStage('error');
      writeStatus(t.batchMax(batchMax), 'error');
      return;
    }
    if (!token) {
      setStage('error');
      writeStatus(t.turnstile, 'error');
      return;
    }

    clearResults();
    busy = true;
    updateSubmit();
    setStage('queued');
    writeStatus(t.submitting);

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ urls, turnstileToken: token }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        busy = false;
        setStage('error');
        const code = data?.error?.code;
        let message = errorText(code);
        if (code === 'BAD_URL' && Number(data?.index) > 0) {
          message = t.badUrlAt(Number(data.index));
        } else if (code === 'BATCH_TOO_BIG') {
          const max = Number(data?.max);
          if (Number.isFinite(max) && max >= 1) {
            batchMax = Math.min(5, Math.trunc(max));
            updateHint();
          }
          message = t.batchMax(batchMax);
        } else if ((code === 'IP_HOURLY' || code === 'IP_DAILY')
          && Number.isFinite(Number(data?.remaining))) {
          message = t.rateRemaining(Number(data.remaining));
        }
        writeStatus(message, 'error');
        resetTurnstile();
        updateSubmit();
        return;
      }

      const created = Array.isArray(data.jobs)
        ? data.jobs
        : (data.id ? [{ id: data.id }] : []);
      jobs = created
        .filter((job) => typeof job.id === 'string' && /^[a-f0-9]{32}$/.test(job.id))
        .map((job) => ({ id: job.id }));
      state.clear();
      saveSession();
      if (Number.isFinite(Number(data.batchMax))) {
        batchMax = Math.min(5, Math.trunc(Number(data.batchMax)));
        updateHint();
      }
      busy = false;
      input.value = '';
      resetTurnstile();
      updateSubmit();
      pollStarted = 0;
      buildRows();
      renderOverall();
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

  setStage(jobs.length > 0 ? 'queued' : 'idle');
  updateHint();
  renderTurnstile();
  updateSubmit();
  checkServer();
  if (jobs.length > 0) {
    buildRows();
    renderOverall();
    poll();
  }
})();
