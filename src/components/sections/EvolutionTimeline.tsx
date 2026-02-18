import React from 'react';
import { TechBadge } from '../ui/TechBadge';

interface TimelineItem {
    year: string;
    role: string;
    company: string;
    description: string;
    tech: string[];
}

interface EvolutionTimelineProps {
    items?: TimelineItem[];
}

// Fallback data if no props provided (should not happen with correct implementation)
const defaultData: TimelineItem[] = [
    {
        year: "2024 - Present",
        role: "Strategic Software Architect",
        company: "APM Terminals",
        description: "Optimizing global terminal operations with event-driven architectures.",
        tech: ["Kotlin", "Kafka", "Kubernetes", "Azure"]
    }
];

export const EvolutionTimeline = ({ items = defaultData }: EvolutionTimelineProps) => {
    return (
        <div className="relative container mx-auto px-6 py-12">

            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-ideBorder transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
                {items.map((item, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group pl-8 md:pl-0`}>

                        {/* Timeline Dot (Mobile & Desktop) */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-deepSpace border-2 border-kotlinIndigo transform md:-translate-x-1/2 z-10 mt-1.5 md:hidden block group-hover:bg-kotlinIndigo transition-colors" />
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-deepSpace border-2 border-kotlinIndigo transform -translate-x-1/2 z-10 mt-1.5 hidden md:block group-hover:bg-kotlinIndigo transition-colors" />

                        {/* Mobile Vertical Line */}
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-ideBorder md:hidden" />


                        {/* Content Card */}
                        <div className="w-full md:w-[calc(50%-2rem)] bg-idePanel/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-ideBorder hover:border-kotlinIndigo/50 transition-all duration-300 shadow-card hover:shadow-card-hover ml-0 group/card">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <h3 className="text-lg md:text-xl font-bold text-white font-montserrat group-hover/card:text-kotlinIndigo/90 transition-colors">{item.role}</h3>
                                <span className="text-xs font-mono text-cyberMint px-3 py-1 bg-cyberMint/10 rounded-full border border-cyberMint/20">{item.year}</span>
                            </div>
                            <div className="text-kotlinIndigo font-semibold mb-4 text-sm md:text-base">{item.company}</div>
                            <p className="text-slate-300/90 text-sm md:text-base mb-5 leading-relaxed group-hover/card:text-slate-200 transition-colors">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tech.map(t => <TechBadge key={t} name={t} />)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
