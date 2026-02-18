'use client';

import React from 'react';
import { Terminal, Shield } from 'lucide-react';

interface HeroProps {
    roleArchitect: string;
    roleGuardian: string;
    subtitle: string;
    ctaArchitecture: string;
    ctaSecurity: string;
    systemStatus: string;
}

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const Hero = ({
    roleArchitect,
    roleGuardian,
    subtitle,
    ctaArchitecture,
    ctaSecurity,
    systemStatus
}: HeroProps) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-deepSpace">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kotlinIndigo/20 rounded-full blur-3xl pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyberMint/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-idePanel/60 backdrop-blur-md border border-ideBorder mb-12 shadow-glow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyberMint opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyberMint"></span>
                    </span>
                    <span className="text-xs font-mono text-slateGray uppercase tracking-wider font-medium">{systemStatus}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight font-montserrat leading-tight">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-kotlinIndigo via-violet-400 to-kotlinIndigo bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite] drop-shadow-glow">{roleArchitect}</span> <br />
                    <span className="text-2xl md:text-4xl lg:text-5xl text-slate-500 font-light italic serif">&</span> <br />
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyberMint to-emerald-400 bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">{roleGuardian}</span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-slate-400/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                    {subtitle}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                    <button
                        onClick={() => scrollToSection('architecture-showcase')}
                        className="group w-full md:w-auto px-10 py-4 bg-kotlinIndigo hover:bg-indigo-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-glow hover:shadow-glow-lg hover:scale-105"
                    >
                        <Terminal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>{ctaArchitecture}</span>
                    </button>
                    <button
                        onClick={() => scrollToSection('evolution-section')}
                        className="group w-full md:w-auto px-10 py-4 bg-idePanel/80 backdrop-blur-sm hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-card hover:shadow-card-hover hover:scale-105"
                    >
                        <Shield className="w-5 h-5 group-hover:scale-110 transition-transform text-cyberMint" />
                        <span>{ctaSecurity}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
