import { useState } from 'react';
import { demo } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

/**
 * 16:9 player slot.
 * - `demo.videoSrc`  → native <video> (lazy, no autoplay)
 * - `demo.youtubeId` → click-to-load YouTube facade (no third-party JS until asked)
 * - neither          → dashed placeholder, ready to be filled in
 */
function VideoFrame() {
  const [activated, setActivated] = useState(false);

  if (demo.videoSrc) {
    return (
      <div className="ar-video-frame ar-video-frame-fill">
        <video
          className="h-full w-full rounded-[20px] object-cover"
          controls
          preload="none"
          playsInline
          aria-label={demo.videoTitle}
        >
          <source src={demo.videoSrc} />
          Trình duyệt của bạn không hỗ trợ phát video.
        </video>
      </div>
    );
  }

  if (demo.youtubeId && activated) {
    return (
      <div className="ar-video-frame ar-video-frame-fill">
        <iframe
          className="h-full w-full rounded-[20px]"
          src={`https://www.youtube-nocookie.com/embed/${demo.youtubeId}?autoplay=1&rel=0`}
          title={demo.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  const playable = Boolean(demo.youtubeId);

  return (
    <div className="ar-video-frame">
      <div>
        {playable ? (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full text-white transition-transform duration-300 hover:scale-105"
            style={{ background: 'var(--grad-brand)', boxShadow: '0 16px 50px rgba(109,82,255,.4)' }}
            aria-label={`Phát ${demo.videoTitle}`}
          >
            <Icon name="Play" size={26} />
          </button>
        ) : null}
        <strong className="text-[var(--text)]">{demo.placeholder.title}</strong>
        <br />
        {demo.placeholder.caption}
      </div>
    </div>
  );
}

export default function DemoSection() {
  return (
    <section id="demo" className="ar-section" aria-labelledby="demo-title">
      <div className="ar-container">
        <Reveal className="ar-demo-box">
          <div>
            <span className="ar-badge">
              <Icon name="Play" size={14} />
              {demo.badge}
            </span>

            <h2
              id="demo-title"
              className="my-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-black leading-[1.15] tracking-[-0.03em]"
            >
              {demo.headline}
            </h2>

            <p className="text-[var(--muted)]">{demo.subheadline}</p>

            <ul className="ar-checklist">
              {demo.examples.map((example) => (
                <li key={example}>
                  <Icon name="Check" size={15} />
                  <span>{example}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3 max-[680px]:flex-col">
              <a href={demo.cta.href} className="ar-btn ar-btn-primary ar-btn-lg">
                <Icon name="Play" size={17} />
                {demo.cta.label}
              </a>
            </div>
          </div>

          <VideoFrame />
        </Reveal>
      </div>
    </section>
  );
}
