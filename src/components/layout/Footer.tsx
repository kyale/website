'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
    lang: string;
    dictionary: any;
}

export const Footer = ({ lang, dictionary }: FooterProps) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { href: `/${lang}`, label: dictionary.navigation.home },
        { href: `/${lang}/about`, label: dictionary.navigation.about },
        { href: `/${lang}/slides`, label: dictionary.navigation.slides },
        { href: `/${lang}/contact`, label: dictionary.navigation.contact },
    ];

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: dictionary.contact.details.linkedin, label: "LinkedIn" },
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/kyale", label: "GitHub" },
    ];

    return (
        <footer className="relative bg-deepSpace pt-20 pb-10 overflow-hidden border-t border-ideBorder">
            {/* Background enhancement */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-kotlinIndigo/50 to-transparent"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-kotlinIndigo/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href={`/${lang}`} className="text-2xl font-bold font-montserrat text-white mb-2 hover:text-kotlinIndigo transition-colors">
                            Iman Ghatami
                        </Link>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                            {dictionary.hero.subtitle}
                        </p>
                        <div className="mt-4 text-xs text-slate-500 font-mono space-y-1">
                            <p>{dictionary.contact.details.location}</p>
                            <a href={dictionary.contact.details.website_url} target="_blank" rel="noopener noreferrer" className="block hover:text-kotlinIndigo">ghatami.nl</a>
                            <p>{dictionary.contact.details.company}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-white hover:text-shadow-glow transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target={social.href.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="p-2 bg-idePanel border border-ideBorder rounded-full text-slate-400 hover:text-white hover:border-kotlinIndigo hover:shadow-glow-sm transition-all hover:-translate-y-1"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-ideBorder pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 font-mono text-xs">
                        © {new Date().getFullYear()} {dictionary.contact.details.company} | {dictionary.footer.copyright}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-kotlinIndigo transition-colors group"
                    >
                        BACK TO TOP
                        <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
