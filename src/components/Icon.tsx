import {
  HeartHandshake, Target, Users, RefreshCw, Lightbulb,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = { HeartHandshake, Target, Users, RefreshCw };

export default function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const C = map[name] ?? Lightbulb;
  return <C aria-hidden className={className} />;
}
