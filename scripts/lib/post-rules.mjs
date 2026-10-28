/**
 * What an article has to be true of, checked against the article's own data.
 *
 * These rules started inside `verify-build.mjs`, which is a post-build script
 * that reads `dist/`. That was the wrong place for half of them: whether the
 * two languages are the same shape, whether the English half was ever written,
 * and whether an article named something it is not allowed to name are all
 * questions about the *source*, and answering them after a build means the
 * answer arrives a minute after the mistake.
 *
 * So they live here. `scripts/check-posts.mjs` runs them alone — the check
 * whoever is writing an article runs while writing it — and `verify-build.mjs`
 * runs the same function over the same list and then goes on to check what
 * actually landed in `dist/`. One list of banned words, one definition of
 * "the same shape", two callers.
 */

/**
 * Words an article may not contain, in either language.
 *
 * An article about how the system works is written for the person using it —
 * layers, principles and trade-offs — and never describes what is inside the
 * machine. Every word below is a name from the build rather than from the
 * explanation, and one of them appearing in a published page tells a reader
 * (or a competitor) more about how this is made than any article intends to.
 *
 * Documentation is the other way round on purpose: a topic is written for
 * somebody with the app open, and the words it needs are the words on their
 * screen. See the note on `BURIED` in `verify-build.mjs`.
 */
export const INTERNAL_WORDS = [
  'ffmpeg', 'sqlite', 'gradio', 'docker', 'adb', 'uiautomator', 'moviepy',
  'moneyprinter', 'zerotts', 'nvenc', 'jsonrpc', '127.0.0.1', 'localhost',
];

/**
 * One article may name one of those words, and only one.
 *
 * The comparison article is *about* MoneyPrinterTurbo as a public product; the
 * rule's job is to keep the build's internal vocabulary out of customer prose,
 * not to make a competitor unnameable. The exception is keyed by slug and names
 * the single word, so a second article cannot inherit it by copying a heading.
 */
const INTERNAL_ALLOWED = {
  'so-sanh-autoreel-va-moneyprinterturbo': ['moneyprinter'],
};

export const TITLE_MAX = 62;
export const DESCRIPTION_MAX = 165;

/** The sequence of block types in a body — what the two languages must agree on. */
export function bodyShape(blocks) {
  return blocks.map((one) => (one.figure ? 'figure' : Object.keys(one)[0])).join(' ');
}

/**
 * Everything wrong with the list of articles, as sentences.
 *
 * Returns an array rather than throwing, and rather than stopping at the first
 * problem: an article being written has several things missing at once, and a
 * checker that reports one per run turns a five-minute fix into five runs.
 */
export function postContentProblems(posts, languages = ['vi', 'en']) {
  const problems = [];
  const seen = Object.fromEntries(languages.map((lang) => [lang, new Set()]));

  for (const post of posts) {
    const name = post.slug?.vi || '(an article with no slug)';

    if (!post.date) problems.push(`${name}: no date`);
    if (!post.body) {
      problems.push(`${name}: no body`);
      continue;
    }

    for (const lang of languages) {
      for (const field of ['slug', 'title', 'description', 'lead', 'tag', 'minutes']) {
        if (!post[field]?.[lang]) problems.push(`${name}: missing ${field}.${lang}`);
      }
      if (!Array.isArray(post.body[lang]) || !post.body[lang].length) {
        problems.push(`${name}: no ${lang} body`);
      }
      const title = post.title?.[lang];
      if (title && title.length > TITLE_MAX) {
        problems.push(`${name} [${lang}]: title is ${title.length} characters, over ${TITLE_MAX}`);
      }
      const description = post.description?.[lang];
      if (description && description.length > DESCRIPTION_MAX) {
        problems.push(
          `${name} [${lang}]: description is ${description.length} characters, over ${DESCRIPTION_MAX}`,
        );
      }
      const slug = post.slug?.[lang];
      if (slug) {
        if (seen[lang].has(slug)) problems.push(`${name}: two articles share the ${lang} slug ${slug}`);
        seen[lang].add(slug);
      }
    }

    // The two languages describe the same article. A `{ note }` that exists on
    // one side and not the other is a warning the other reader never gets, and
    // a body that is a different length of list is two different articles.
    if (post.body.vi?.length && post.body.en?.length) {
      if (bodyShape(post.body.vi) !== bodyShape(post.body.en)) {
        problems.push(`${name}: vi and en bodies are not the same shape`);
      }
    }
    const faqVi = post.faq?.vi?.length || 0;
    const faqEn = post.faq?.en?.length || 0;
    if (faqVi !== faqEn) {
      problems.push(`${name}: ${faqVi} Vietnamese FAQ entries against ${faqEn} English ones`);
    }

    // The English half is written, not copied.
    //
    // This is what makes a bilingual blog safe to migrate a piece at a time: a
    // duplicated field is a valid page with the right `<html lang>` and a
    // canonical, so nothing else notices that an English reader is being served
    // Vietnamese. `scripts/migrate-posts.mjs` filled both halves with the same
    // text on purpose, and this is what turns "not translated yet" into a
    // failing check rather than a silent one.
    for (const field of ['title', 'description', 'lead', 'tag']) {
      if (post[field] && post[field].vi === post[field].en) {
        problems.push(`${name}: ${field}.en is still the Vietnamese text`);
      }
    }
    if (post.body.vi && JSON.stringify(post.body.vi) === JSON.stringify(post.body.en)) {
      problems.push(`${name}: the English body is still the Vietnamese one`);
    }
    if (post.faq?.vi && JSON.stringify(post.faq.vi) === JSON.stringify(post.faq.en)) {
      problems.push(`${name}: the English FAQ is still the Vietnamese one`);
    }
    if (post.slug?.vi && post.slug.vi === post.slug.en) {
      problems.push(`${name}: the English slug was left as the Vietnamese one`);
    }

    // `**emphasis**` is rendered on a documentation page and escaped here, so in
    // an article it ships as two literal asterisks. Measured: the first draft of
    // one article printed `**ghi lại một dòng**` on the published page and every
    // check passed.
    for (const lang of languages) {
      if (!post.body[lang]) continue;
      if (JSON.stringify(post.body[lang]).includes('**')) {
        problems.push(`${name} [${lang}]: has ** in a body block, which is escaped, not rendered`);
      }
    }

    const text = JSON.stringify(post).toLowerCase();
    const allowed = new Set(INTERNAL_ALLOWED[post.slug?.vi] || []);
    for (const word of INTERNAL_WORDS) {
      if (!allowed.has(word) && text.includes(word)) problems.push(`${name}: names "${word}"`);
    }
  }

  return problems;
}
