'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
    lang: string;
    dictionary: any;
}

export const Header = ({ lang, dictionary }: HeaderProps) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === `/${lang}${path}`;

    const switchLanguage = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split('/');
        segments[1] = newLang;
        return segments.join('/');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: `/${lang}`, label: dictionary.navigation.home, path: '' },
        { href: `/${lang}/about`, label: dictionary.navigation.about, path: '/about' },
        { href: `/${lang}/slides`, label: dictionary.navigation.slides, path: '/slides' },
        { href: `/${lang}/terminal`, label: dictionary.navigation.terminal, path: '/terminal' },
        { href: `/${lang}/contact`, label: dictionary.navigation.contact, path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-deepSpace/90 backdrop-blur-lg">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href={`/${lang}`}
                    className="flex items-center gap-3 font-montserrat font-bold text-white text-lg group z-[110] transition-all"
                    onClick={closeMenu}
                >
                    <Image
                        src="/logo_iman_ghatami.png"
                        alt="Iman Ghatami"
                        width={120}
                        height={120}
                        className="object-contain"
                        priority
                    />
                    <div className="flex items-center gap-3 whitespace-nowrap">
                        <span className="text-white group-hover:text-kotlinIndigo transition-colors leading-tight">Iman <span className="font-bold">GHATAMI</span></span>
                        <span className="text-ideBorder">|</span>
                        <span className="text-xs text-slateGray font-bold tracking-wider leading-tight">SOFTWARE ARCHITECT</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 text-sm font-semibold transition-colors ${isActive(link.path) || (link.path === '' && isActive('/'))
                                ? 'text-kotlinIndigo'
                                : 'text-slateGray hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Language Switcher */}
                <div className="hidden md:flex items-center gap-2 text-xs font-mono">
                    <Link
                        href={switchLanguage('en')}
                        className={`px-3 py-1.5 rounded font-semibold transition-all ${lang === 'en'
                            ? 'bg-kotlinIndigo text-white'
                            : 'text-slateGray hover:text-white'
                            }`}
                    >
                        EN
                    </Link>
                    <span className="text-ideBorder">|</span>
                    <Link
                        href={switchLanguage('nl')}
                        className={`px-3 py-1.5 rounded font-semibold transition-all ${lang === 'nl'
                            ? 'bg-kotlinIndigo text-white'
                            : 'text-slateGray hover:text-white'
                            }`}
                    >
                        NL
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slateGray hover:text-white transition-colors z-[110]"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 w-screen h-screen z-[100] flex flex-col pt-24 px-8 md:hidden overflow-y-auto overscroll-none"
                    style={{ backgroundColor: '#0F172A' }}
                >
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`text-4xl font-bold font-montserrat tracking-tight transition-all duration-300 ${isActive(link.path) || (link.path === '' && isActive('/'))
                                    ? 'text-white translate-x-4'
                                    : 'text-slate-400 hover:text-kotlinIndigo hover:translate-x-4'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto mb-12 border-t border-ideBorder pt-8">
                        <p className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider">Select Language</p>
                        <div className="flex items-center gap-4">
                            <Link
                                href={switchLanguage('en')}
                                onClick={closeMenu}
                                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${lang === 'en'
                                    ? 'bg-kotlinIndigo border-kotlinIndigo text-white'
                                    : 'border-ideBorder text-slateGray hover:border-kotlinIndigo hover:text-white'
                                    }`}
                            >
                                ENGLISH
                            </Link>
                            <Link
                                href={switchLanguage('nl')}
                                onClick={closeMenu}
                                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${lang === 'nl'
                                    ? 'bg-kotlinIndigo border-kotlinIndigo text-white'
                                    : 'border-ideBorder text-slateGray hover:border-kotlinIndigo hover:text-white'
                                    }`}
                            >
                                NEDERLANDS
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
