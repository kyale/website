import { TechBadge } from "../ui/TechBadge";

interface ArchitectureDiveProps {
  title: string;
  description: string;
}

export const ArchitectureDive = ({ title, description }: ArchitectureDiveProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-idePanel/20 p-8 rounded-xl border border-ideBorder">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
          {title}
        </h3>
        <p className="text-slateGray mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex flex-wrap gap-2">
          <TechBadge name="Kotlin" />
          <TechBadge name="Kafka" />
          <TechBadge name="Kubernetes" />
          <TechBadge name="Spring Boot" />
        </div>
      </div>

      {/* Conceptual diagram */}
      <div className="relative border border-dashed border-ideBorder rounded-lg p-4 flex items-center justify-center bg-deepSpace">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-kotlinIndigo rotate-45 mx-auto mb-4 flex items-center justify-center">
            <span className="-rotate-45 text-[10px] font-mono">DOMAIN</span>
          </div>
          <p className="text-[10px] font-mono text-cyberMint">Hexagonal Architecture</p>
        </div>
      </div>
    </div>
  );
};
