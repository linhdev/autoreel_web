import Icon from '../ui/Icon.jsx';
import { RevealItem } from '../ui/Reveal.jsx';

export default function WorkflowCard({ workflow }) {
  return (
    <RevealItem as="article" className="ar-card ar-card-glow flex flex-col">
      <span className="ar-icon">
        <Icon name={workflow.icon} size={22} />
      </span>

      <h3>{workflow.title}</h3>
      <p className="font-bold text-[#e6ecff]">{workflow.headline}</p>
      <p className="mt-2">{workflow.description}</p>

      <div className="ar-mini-flow">{workflow.miniFlow}</div>

      <ul className="ar-checklist mt-auto">
        {workflow.features.map((feature) => (
          <li key={feature}>
            <Icon name="Check" size={14} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </RevealItem>
  );
}
