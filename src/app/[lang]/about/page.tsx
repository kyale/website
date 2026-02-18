import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EvolutionTimeline } from "@/components/sections/EvolutionTimeline";
import { PersonalDevelopmentPlan } from "@/components/sections/PersonalDevelopmentPlan";
import { getDictionary } from "@/get-dictionary";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-deepSpace min-h-screen text-slateGray">
            <Header lang={lang} dictionary={dict} />

            <section className="pt-32 pb-12 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-6">
                    {dict.evolution.title_prefix} <span className="text-kotlinIndigo">{dict.evolution.title_suffix}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-400">
                    A deep dive into 17+ years of engineering excellence, tailored for the HBO-I Competency Standards.
                </p>
            </section>

            <section className="pb-24">
                <EvolutionTimeline items={dict.evolution.items} />
            </section>

            <PersonalDevelopmentPlan dictionary={dict} />
            <Footer lang={lang} dictionary={dict} />
        </main>
    );
}
