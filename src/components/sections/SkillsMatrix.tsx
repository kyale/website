import React from 'react';
import { TechBadge } from '../ui/TechBadge';

interface SkillsMatrixProps {
    dictionary: any;
}

export const SkillsMatrix = ({ dictionary }: SkillsMatrixProps) => {
    const t = dictionary.skills_matrix;
    const slides = dictionary.slides?.slide3; // Fallback to reusing data if possible, or we can use new structure

    if (!t || !slides) return null;

    // Mapping new structure to existing data or new data
    // For now we reuse the data we saw in slide3 (languages, frameworks, security)

    return (
        <section className="container mx-auto px-6 py-24 bg-idePanel/30 border-b border-ideBorder" id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
                    {t.title}
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Languages */}
                <div className="bg-deepSpace border border-ideBorder rounded-xl p-6 hover:border-kotlinIndigo/50 transition-colors group">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-kotlinIndigo">&lt;</span>
                        {t.categories.languages}
                        <span className="text-kotlinIndigo">/&gt;</span>
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-idePanel rounded-lg border border-ideBorder/50">
                            <span className="font-mono text-slate-300">Kotlin</span>
                            <span className="text-cyberMint text-sm font-bold">{slides.languages.kotlin}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-idePanel rounded-lg border border-ideBorder/50">
                            <span className="font-mono text-slate-300">Java</span>
                            <span className="text-white text-sm font-bold">{slides.languages.java}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-idePanel rounded-lg border border-ideBorder/50">
                            <span className="font-mono text-slate-300">PHP</span>
                            <span className="text-slate-500 text-sm font-bold">{slides.languages.php}</span>
                        </div>
                    </div>
                </div>

                {/* Frameworks */}
                <div className="bg-deepSpace border border-ideBorder rounded-xl p-6 hover:border-kotlinIndigo/50 transition-colors group">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-cyberMint">{'{'}</span>
                        {t.categories.frameworks}
                        <span className="text-cyberMint">{'}'}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {slides.frameworks.items.map((item: string, i: number) => (
                            <TechBadge key={i} name={item} />
                        ))}
                    </div>
                </div>

                {/* Security & Infrastructure */}
                <div className="bg-deepSpace border border-ideBorder rounded-xl p-6 hover:border-kotlinIndigo/50 transition-colors group">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-violet-400">#</span>
                        {t.categories.security}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {slides.security.items.map((item: string, i: number) => (
                            <TechBadge key={i} name={item} />
                        ))}
                        {/* Adding some explicit infrastructure tags if they aren't in slides.security */}
                        <TechBadge name="Docker" />
                        <TechBadge name="AWS" />
                        <TechBadge name="Azure" />
                    </div>
                </div>
            </div>
        </section>
    );
};
