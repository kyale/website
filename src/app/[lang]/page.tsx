import { Hero } from "@/components/sections/Hero";
import { BigImpactSlide } from "@/components/sections/BigImpactSlide";
import { EvolutionTimeline } from "@/components/sections/EvolutionTimeline";
import { ArchitectureDive } from "@/components/sections/ArchitectureDive";
import { ArchitectureCarousel } from "@/components/sections/ArchitectureCarousel";

import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return {
        title: dict.metadata.title,
        description: dict.metadata.description,
        keywords: dict.metadata.keywords,
        openGraph: {
            title: dict.metadata.title,
            description: dict.metadata.description,
            type: 'website',
            locale: lang,
        }
    };
}

export default async function Home({ params }: Props) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Iman Ghatami',
        jobTitle: 'Senior Software Architect',
        url: 'https://imanghatami.com',
        sameAs: [
            'https://www.linkedin.com/in/iman-g-0834111b/',
            'https://github.com/imanghatami' // Assuming github handle based on context, update if known exactly
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'APM Terminals'
        },
        knowsAbout: [
            'Software Architecture',
            'Distributed Systems',
            'Kotlin',
            'Java',
            'Security',
            'Event Sourcing',
            'DDD',
            'Microservices'
        ]
    };

    return (
        <main className="bg-deepSpace min-h-screen text-slateGray selection:bg-kotlinIndigo selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header lang={lang} dictionary={dict} />

            <Hero
                roleArchitect={dict.hero.role_architect}
                roleGuardian={dict.hero.role_guardian}
                subtitle={dict.hero.subtitle}
                ctaArchitecture={dict.hero.cta_architecture}
                ctaSecurity={dict.hero.cta_security}
                systemStatus={dict.hero.system_status}
            />


            {/* Architecture Showcase - Featured Section */}
            <section id="architecture-showcase" className="py-24 bg-gradient-to-b from-deepSpace via-idePanel/10 to-deepSpace">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
                            <span className="text-cyberMint">Architecture,</span> <span className="text-kotlinIndigo">Security</span> & <span className="text-violet-400">Scale</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Visual deep-dive into distributed systems, event-driven architectures, and security patterns
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <ArchitectureCarousel />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <BigImpactSlide
                        title={dict.impact.global_scale}
                        metric="10+"
                        description={dict.impact.global_scale_desc}
                    />
                    <BigImpactSlide
                        title={dict.impact.experience}
                        metric="17+"
                        description={dict.impact.experience_desc}
                    />
                    <BigImpactSlide
                        title={dict.impact.tech_stack}
                        metric="7+"
                        description={dict.impact.tech_stack_desc}
                    />
                </div>
            </section>

            <section id="evolution-section" className="py-24 bg-idePanel/20 border-y border-ideBorder">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white font-montserrat">
                        <span className="text-kotlinIndigo">{dict.evolution.title_prefix}</span> {dict.evolution.title_suffix}
                    </h2>
                </div>
                <EvolutionTimeline items={dict.evolution.items} />
            </section>

            <SkillsMatrix dictionary={dict} />

            <section className="container mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                    <span className="text-cyberMint">{dict.architecture.title_prefix}</span> {dict.architecture.title_suffix}
                </h2>
                <ArchitectureDive
                    title={dict.architecture.diagram_title}
                    description={dict.architecture.diagram_desc}
                />

                <div className="mt-12 text-center">
                    <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                        {dict.architecture.description}
                    </p>
                    <button className="px-8 py-3 bg-transparent border border-kotlinIndigo text-kotlinIndigo hover:bg-kotlinIndigo hover:text-white rounded-lg transition-colors font-medium">
                        {dict.architecture.cta}
                    </button>

                </div>
            </section>

            <Footer lang={lang} dictionary={dict} />
        </main>
    );
}
