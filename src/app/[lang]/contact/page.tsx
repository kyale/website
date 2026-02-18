import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/get-dictionary";
import { Linkedin, Github } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-deepSpace min-h-screen text-slateGray flex flex-col">
            <Header lang={lang} dictionary={dict} />

            <section className="pt-32 pb-24 container mx-auto px-6 flex-grow flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-12">
                    Get in <span className="text-cyberMint">Touch</span>
                </h1>

                <div className="w-full max-w-4xl mb-16">
                    <ContactForm dict={dict} />
                </div>

                <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {/* LinkedIn */}
                    <a href={dict.contact.details.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-idePanel rounded-xl border border-ideBorder hover:border-kotlinIndigo transition-colors group">
                        <div className="p-4 bg-deepSpace rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-8 h-8 text-kotlinIndigo" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                        <p className="text-slate-400">Connect Professionally</p>
                    </a>

                    {/* WhatsApp */}
                    {/* GitHub */}
                    <a href="https://github.com/kyale" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-idePanel rounded-xl border border-ideBorder hover:border-kotlinIndigo transition-colors group">
                        <div className="p-4 bg-deepSpace rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-8 h-8 text-kotlinIndigo" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                        <p className="text-slate-400">Review Code & Contributions</p>
                    </a>

                    {/* Location */}
                    <div className="flex flex-col items-center p-8 bg-idePanel rounded-xl border border-ideBorder group cursor-default">
                        <div className="p-4 bg-deepSpace rounded-full mb-4 group-hover:scale-110 transition-transform">
                            {/* MapPin icon */}
                            <svg className="w-8 h-8 text-kotlinIndigo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{dict.contact.details.address_label}</h3>
                        <p className="text-slate-400 text-center">{dict.contact.details.location}</p>
                    </div>
                </div>
            </section>

            <Footer lang={lang} dictionary={dict} />
        </main>
    );
}
