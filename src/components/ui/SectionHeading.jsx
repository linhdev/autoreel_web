import Reveal from './Reveal.jsx';

/**
 * Centered section heading with an optional gradient-highlighted fragment.
 * Pass `title` for plain headings, or the before/highlight/after triple.
 */
export default function SectionHeading({
  title,
  before,
  highlight,
  after,
  subtitle,
  id,
  className = '',
}) {
  return (
    <Reveal className={`ar-section-head ${className}`}>
      <h2 id={id}>
        {title ?? (
          <>
            {before ? `${before} ` : null}
            {highlight ? <span className="ar-gradient-text">{highlight}</span> : null}
            {after ? ` ${after}` : null}
          </>
        )}
      </h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </Reveal>
  );
}
