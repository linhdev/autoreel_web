import { useRouter } from '../../i18n/router.jsx';
import { DEEP_DIVES } from '../../data/deepDives/index.js';
import RichText from '../ui/RichText.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

/**
 * The part of a commercial route that is not on the home page.
 *
 * `routes.js` can render a route as a subset of the one-pager, which is how the
 * workflow, features, pricing and FAQ pages became near-duplicates of `/`.
 * This component is the counterweight: each of those routes adds a block of
 * copy that exists nowhere else, so the page has a reason to be indexed as its
 * own document.
 *
 * It is data-driven rather than four hand-written sections. The words live in
 * `src/data/deepDives/`; this file only decides the shape, and a route with no
 * entry renders nothing.
 */
export default function RouteDeepDive() {
  const { route, lang } = useRouter();
  const data = DEEP_DIVES[route.key]?.[lang];

  if (!data) return null;

  const faqTitle = data.faqTitle || (lang === 'en' ? 'Quick answers' : 'Câu hỏi nhanh');

  return (
    <section id="deep-dive" className="ar-section ar-deep" aria-labelledby="deep-dive-title">
      <div className="ar-container">
        <SectionHeading id="deep-dive-title" title={data.title} subtitle={data.subtitle} />

        <div className="ar-deep-body">
          {data.blocks.map((block) => (
            <div className="ar-deep-block" key={block.h2}>
              <h3 className="ar-deep-h3">{block.h2}</h3>

              {block.paragraphs
                ? block.paragraphs.map((paragraph) => (
                    <p className="ar-deep-p" key={paragraph}>
                      <RichText text={paragraph} tag="strong" />
                    </p>
                  ))
                : null}

              {block.bullets ? (
                <ul className="ar-deep-list">
                  {block.bullets.map((item) => (
                    <li key={item}>
                      <RichText text={item} tag="strong" />
                    </li>
                  ))}
                </ul>
              ) : null}

              {block.table ? (
                <div className="ar-deep-table-wrap">
                  <table className="ar-deep-table">
                    <thead>
                      <tr>
                        {block.table.head.map((cell) => (
                          <th scope="col" key={cell}>
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row) => (
                        <tr key={row.join('|')}>
                          {row.map((cell, index) =>
                            index === 0 ? (
                              <th scope="row" key={cell}>
                                <RichText text={cell} tag="strong" />
                              </th>
                            ) : (
                              <td key={`${cell}-${index}`}>
                                <RichText text={cell} tag="strong" />
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {block.qa ? (
                <div className="ar-deep-qa">
                  {block.qa.map(([question, answer]) => (
                    <div className="ar-deep-qa-item" key={question}>
                      <h4>{question}</h4>
                      <p>{answer}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {block.paragraphsAfter
                ? block.paragraphsAfter.map((paragraph) => (
                    <p className="ar-deep-p" key={paragraph}>
                      <RichText text={paragraph} tag="strong" />
                    </p>
                  ))
                : null}
            </div>
          ))}

          {data.faq?.length ? (
            <div className="ar-deep-block">
              <h3 className="ar-deep-h3">{faqTitle}</h3>
              <div className="ar-deep-qa">
                {data.faq.map(([question, answer]) => (
                  <div className="ar-deep-qa-item" key={question}>
                    <h4>{question}</h4>
                    <p>{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
