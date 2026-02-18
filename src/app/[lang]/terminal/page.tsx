import { Terminal } from "@/components/sections/Terminal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/get-dictionary";

export default async function TerminalPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-deepSpace min-h-screen text-slateGray selection:bg-kotlinIndigo selection:text-white">
            <Header lang={lang} dictionary={dict} />

            <div className="container mx-auto px-6 py-24 mt-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white font-montserrat mb-4">
                        <span className="text-kotlinIndigo">System</span> <span className="text-cyberMint">Terminal</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {dict.terminal.description}
                    </p>
                </div>
                <Terminal dictionary={dict} />
            </div>

            <Footer lang={lang} dictionary={dict} />
        </main>
    );
}
