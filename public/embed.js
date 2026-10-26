/*
 * The embeddable AutoReel download card.
 *
 * A host page includes:
 *
 *     <div id="autoreel-download"></div>
 *     <script src="https://autoreelvn.com/embed.js" async></script>
 *
 * This file only creates DOM nodes; it never writes HTML from a string and
 * never reads anything from the host page. The link carries a UTM source so
 * the traffic from a blog or a shop is visible in analytics.
 */
(() => {
  const script = document.currentScript
    || [...document.scripts].reverse().find((one) => /\/embed\.js(\?|$)/.test(one.src));
  const mount = document.getElementById('autoreel-download')
    || (script && script.parentElement);
  if (!mount || mount.dataset.autoreelEmbed === '1') return;
  mount.dataset.autoreelEmbed = '1';

  const card = document.createElement('div');
  card.style.cssText = [
    'box-sizing:border-box',
    'max-width:380px',
    'padding:18px',
    'border:1px solid rgba(109,94,252,.35)',
    'border-radius:16px',
    'background:linear-gradient(160deg,#121a36,#070b1a)',
    'color:#f5f6ff',
    'font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif',
    'box-shadow:0 16px 44px rgba(3,6,18,.35)',
  ].join(';');

  const brand = document.createElement('div');
  brand.style.cssText = 'display:flex;align-items:center;gap:8px;font-size:13px;font-weight:800;letter-spacing:-.01em;color:#c7c1ff';
  const dot = document.createElement('span');
  dot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:#6d5efc;box-shadow:0 0 12px #6d5efc';
  brand.append(dot, document.createTextNode('autoreel'));

  const title = document.createElement('div');
  title.textContent = 'Tải video miễn phí';
  title.style.cssText = 'margin:10px 0 4px;font-size:20px;font-weight:800;letter-spacing:-.02em';

  const note = document.createElement('div');
  note.textContent = 'TikTok · YouTube · Douyin · Bilibili · Hongguoduanju · iQiyi';
  note.style.cssText = 'margin-bottom:14px;font-size:12px;line-height:1.5;color:rgba(245,246,255,.65)';

  const link = document.createElement('a');
  link.href = 'https://autoreelvn.com/downloads/?utm_source=embed&utm_medium=widget&utm_campaign=download';
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Tải video ngay';
  link.style.cssText = [
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'height:42px',
    'border-radius:11px',
    'background:linear-gradient(135deg,#6d5efc,#22d3ee)',
    'color:#fff',
    'font-size:14px',
    'font-weight:800',
    'text-decoration:none',
  ].join(';');

  const fine = document.createElement('div');
  fine.textContent = '6 nền tảng · 20 phút · 95MB · Không cần đăng nhập';
  fine.style.cssText = 'margin-top:10px;font-size:11px;color:rgba(245,246,255,.45)';

  card.append(brand, title, note, link, fine);
  mount.append(card);
})();
