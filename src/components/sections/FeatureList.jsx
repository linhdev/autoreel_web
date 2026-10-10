import { useCopy } from '../../i18n/copy.jsx';
import Icon from '../ui/Icon.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

/**
 * Everything the app does, in three groups.
 *
 * Deliberately *not* the benefit cards again: a benefit says what you get out
 * of it ("save time"), and this says what the thing does ("paste a Shopee link,
 * get the title, price and pictures"). The two sections sit next to each other,
 * so they have to be answering different questions or one of them is filler.
 *
 * The list is long on purpose. It is the section a reader scrolls to with a
 * specific question — does it post to Reels, can it dub into more than one
 * language — and the honest answer to that kind of question is a complete list
 * rather than four highlights.
 */
export default function FeatureList() {
  const { allFeatures, allFeaturesSection } = useCopy();

  return (
    <section id="features" className="ar-section" aria-labelledby="features-title">
      <div className="ar-container">
        <SectionHeading
          id="features-title"
          title={allFeaturesSection.title}
          subtitle={allFeaturesSection.subtitle}
        />

        {allFeatures.map((group) => (
          <div key={group.id} className="ar-feature-group">
            <h3 className="ar-feature-group-title">
              <span className="ar-icon">
                <Icon name={group.icon} size={19} />
              </span>
              {group.title}
              <span className="ar-feature-group-note">{group.note}</span>
            </h3>

            <RevealGroup className="grid gap-4 min-[981px]:grid-cols-3 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
              {group.items.map((item) => (
                // The name, not the index: the names are the product's own and
                // do not change with the language, so a switch does not remount
                // every card and replay the reveal.
                <RevealItem as="article" key={item.name} className="ar-card ar-feature">
                  <h4>{item.name}</h4>
                  <p>{item.line}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        ))}
      </div>
    </section>
  );
}
