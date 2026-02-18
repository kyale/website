import { Terminal } from "lucide-react";

interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-idePanel border border-ideBorder rounded-md hover:border-kotlinIndigo transition-colors group">
      <Terminal size={14} className="text-kotlinIndigo group-hover:text-cyberMint" />
      <span className="text-xs font-mono text-slate-300">{name}</span>
    </div>
  );
};
