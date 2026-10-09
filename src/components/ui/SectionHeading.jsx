import Reveal from './Reveal.jsx';
import RichText from './RichText.jsx';

/**
 * Centered section heading.
 *
 * The heading is one string; the gradient phrase inside it is marked with
 * `**` and rendered by `RichText`. There used to be a before/highlight/after
 * triple here, which could not survive translation — see `RichText.jsx`.
 */
export default function SectionHeading({ title, subtitle, id, className = '' }) {
  return (
    <Reveal className={`ar-section-head ${className}`}>
      <h2 id={id}>
        <RichText text={title} />
      </h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </Reveal>
  );
}
