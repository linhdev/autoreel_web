/**
 * A sentence with one or more phrases picked out, without splitting the sentence.
 *
 * The headings used to arrive pre-cut: `titleBefore` + `titleHighlight` +
 * `titleAfter`, joined back together inside `SectionHeading`. That works in one
 * language and breaks in the next one — English puts the emphasised phrase
 * somewhere else, and the translator cannot move it because the pieces are
 * separate fields whose spaces are load-bearing.
 *
 * So the emphasis travels *inside* the string as `**markers**` and one small
 * function turns them into an element. The translator owns the whole sentence,
 * word order and spacing included, and never touches JSX.
 *
 * `String.split` with a capture group keeps the delimiters in the output, which
 * is what makes this a handful of lines instead of a parser.
 *
 * Which element wraps the marked phrases is the caller's business: headings use
 * the gradient span, the hero paragraph uses `<strong>`.
 */
export default function RichText({ text, tag = 'span' }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return tag === 'strong' ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={index} className="ar-gradient-text">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part || null;
  });
}
