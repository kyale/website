import React from 'react';

interface BigImpactSlideProps {
    title: string;
    metric: string;
    description: string;
}

export const BigImpactSlide = ({ title, metric, description }: BigImpactSlideProps) => {
    return (
        <div className="group flex flex-col items-center justify-center p-8 md:p-12 bg-idePanel/30 border border-ideBorder rounded-2xl text-center hover:bg-idePanel/60 hover:border-kotlinIndigo/30 transition-all duration-300 hover:shadow-card-hover">
            <h3 className="text-xs font-semibold text-slateGray/80 mb-4 md:mb-6 uppercase tracking-widest group-hover:text-slateGray transition-colors">{title}</h3>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyberMint to-emerald-400 mb-4 md:mb-6 font-mono tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300">{metric}</div>
            <p className="text-sm md:text-base text-slate-300/90 max-w-xs md:max-w-lg leading-relaxed group-hover:text-slate-200 transition-colors">{description}</p>
        </div>
    );
};
