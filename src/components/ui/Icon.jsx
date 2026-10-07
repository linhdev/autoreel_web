/**
 * Single icon registry so content files can reference icons by name.
 * Only the icons actually used by the landing page are imported — this keeps
 * the lucide-react payload tiny (tree-shaken to ~25 glyphs).
 */
import {
  AudioLines,
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  Clapperboard,
  Cog,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Package,
  Palette,
  Play,
  Plus,
  Repeat,
  Rocket,
  Send,
  ShoppingBag,
  Sparkles,
  User,
  Users,
  X,
  Zap,
} from 'lucide-react';

const registry = {
  AudioLines,
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  Clapperboard,
  Cog,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Package,
  Palette,
  Play,
  Plus,
  Repeat,
  Rocket,
  Send,
  ShoppingBag,
  Sparkles,
  User,
  Users,
  X,
  Zap,
};

export default function Icon({ name, size = 20, strokeWidth = 2, ...rest }) {
  const Cmp = registry[name];
  if (!Cmp) return null;

  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
