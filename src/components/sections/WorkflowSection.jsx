import { workflowSection, workflows } from '../../data/workflows.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup } from '../ui/Reveal.jsx';
import WorkflowCard from './WorkflowCard.jsx';

export default function WorkflowSection() {
  return (
    <section id="workflows" className="ar-section" aria-labelledby="workflows-title">
      <div className="ar-container">
        <SectionHeading
          id="workflows-title"
          before={workflowSection.title}
          highlight={workflowSection.titleHighlight}
          subtitle={workflowSection.subtitle}
        />

        <RevealGroup className="grid gap-5 min-[981px]:grid-cols-3 max-[980px]:grid-cols-1">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
