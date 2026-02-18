import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SlidesViewer } from "@/components/sections/SlidesViewer";
import { getDictionary } from "@/get-dictionary";

export default async function SlidesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-deepSpace min-h-screen text-slateGray flex flex-col">
            <Header lang={lang} dictionary={dict} />

            <div className="flex-1 flex items-center justify-center p-6 pt-24">
                <SlidesViewer dictionary={dict} />
            </div>

            <Footer lang={lang} dictionary={dict} />
        </main>
    );
}
