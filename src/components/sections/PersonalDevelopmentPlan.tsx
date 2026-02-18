import React from 'react';
import { TechBadge } from '../ui/TechBadge';

interface Competency {
    label: string;
    text: string;
}

interface GoalItem {
    goal: string;
    description: string;
    timeline: string;
}

interface PersonalDevelopmentPlanProps {
    dictionary: any;
}

export const PersonalDevelopmentPlan = ({ dictionary }: PersonalDevelopmentPlanProps) => {
    const { pop } = dictionary;

    if (!pop) return null;

    return (
        <section className="container mx-auto px-6 py-24 border-t border-ideBorder/50">
            <h2 className="text-3xl font-bold text-white mb-16 text-center font-montserrat">
                <span className="text-kotlinIndigo">{pop.title.split(' ').slice(0, 2).join(' ')}</span> {pop.title.split(' ').slice(2).join(' ')}
            </h2>

            {/* Vision Section */}
            <div className="mb-20">
                <div className="max-w-4xl mx-auto bg-idePanel/40 p-8 rounded-2xl border border-kotlinIndigo/30 shadow-2xl relative overflow-hidden group hover:border-kotlinIndigo/60 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg className="w-24 h-24 text-kotlinIndigo" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyberMint mb-4 font-montserrat uppercase tracking-wider">{pop.vision_title}</h3>
                    <p className="text-xl text-slate-200 leading-relaxed italic">
                        "{pop.vision}"
                    </p>
                </div>
            </div>

            {/* Competencies Section */}
            <div className="mb-24">
                <h3 className="text-2xl font-bold text-white mb-8 font-montserrat text-center">{pop.competencies_title}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {pop.competencies.map((comp: Competency, index: number) => (
                        <div key={index} className="bg-idePanel p-6 rounded-xl border border-ideBorder hover:border-cyberMint/50 transition-all shadow-lg">
                            <h4 className="text-cyberMint font-mono text-sm uppercase mb-3 tracking-widest">{comp.label}</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">{comp.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Goals Table Section */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 font-montserrat text-center">{pop.goals_title}</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-idePanel/20 rounded-xl overflow-hidden border border-ideBorder">
                        <thead>
                            <tr className="bg-idePanel border-b border-ideBorder">
                                <th className="px-6 py-4 text-cyberMint font-montserrat uppercase tracking-wider text-sm">{pop.table.goal}</th>
                                <th className="px-6 py-4 text-cyberMint font-montserrat uppercase tracking-wider text-sm">{pop.table.description}</th>
                                <th className="px-6 py-4 text-cyberMint font-montserrat uppercase tracking-wider text-sm text-right">{pop.table.timeline}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-ideBorder/50">
                            {pop.table.items.map((item: GoalItem, index: number) => (
                                <tr key={index} className="hover:bg-idePanel/40 transition-colors group">
                                    <td className="px-6 py-6 align-top">
                                        <div className="font-bold text-white group-hover:text-kotlinIndigo transition-colors">{item.goal}</div>
                                    </td>
                                    <td className="px-6 py-6 align-top">
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{item.description}</p>
                                    </td>
                                    <td className="px-6 py-6 align-top text-right whitespace-nowrap">
                                        <span className="text-xs font-mono text-kotlinIndigo px-3 py-1 bg-kotlinIndigo/10 rounded-full border border-kotlinIndigo/20">
                                            {item.timeline}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
