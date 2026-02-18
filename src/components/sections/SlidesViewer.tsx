'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Terminal } from 'lucide-react';

interface Slide {
    id: number;
    title: string;
    content: React.ReactNode;
}

interface SlidesViewerProps {
    dictionary: any;
}

export const SlidesViewer = ({ dictionary }: SlidesViewerProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = useMemo(() => {
        if (!dictionary?.slides) return [];

        const { slide1, slide2, slide3, slide4, controls } = dictionary.slides;

        return [
            {
                id: 1,
                title: slide1.title,
                content: (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6 md:p-12">
                        <div className="mb-4 md:mb-8">
                            <Terminal className="w-16 h-16 md:w-24 md:h-24 text-kotlinIndigo mx-auto mb-4 md:mb-6" />
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-montserrat">{slide1.name}</h1>
                            <h2 className="text-lg md:text-2xl text-slateGray font-mono">{slide1.role}</h2>
                        </div>
                        <div className="bg-idePanel p-4 md:p-6 rounded-lg border-l-4 border-cyberMint max-w-2xl">
                            <p className="text-lg md:text-xl text-white">"{slide1.quote}"</p>
                        </div>
                        <p className="mt-8 md:mt-12 text-xs md:text-sm text-slate-500 font-mono">{slide1.footer}</p>
                    </div>
                )
            },
            {
                id: 2,
                title: slide2.title,
                content: (
                    <div className="flex flex-col justify-center h-full p-6 md:p-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-12 border-b border-ideBorder pb-4">{slide2.timeline_title}</h2>
                        <div className="space-y-4 md:space-y-8">
                            <div className="flex items-start gap-2 md:gap-4">
                                <div className="min-w-[90px] md:min-w-[120px] text-right font-mono text-sm md:text-base text-slate-400">{slide2.item1.year}</div>
                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{slide2.item1.title}</h3>
                                    <p className="text-sm md:text-base text-slateGray">{slide2.item1.desc}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <div className="min-w-[90px] md:min-w-[120px] text-right font-mono text-sm md:text-base text-slate-400">{slide2.item2.year}</div>
                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{slide2.item2.title}</h3>
                                    <p className="text-sm md:text-base text-slateGray">{slide2.item2.desc}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <div className="min-w-[90px] md:min-w-[120px] text-right font-mono text-sm md:text-base text-kotlinIndigo font-bold">{slide2.item3.year}</div>
                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-kotlinIndigo mt-1.5 shrink-0" />
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{slide2.item3.title}</h3>
                                    <p className="text-sm md:text-base text-slateGray">{slide2.item3.desc}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <div className="min-w-[90px] md:min-w-[120px] text-right font-mono text-sm md:text-base text-cyberMint font-bold">{slide2.item4.year}</div>
                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyberMint mt-1.5 shrink-0 animate-pulse" />
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{slide2.item4.title}</h3>
                                    <p className="text-sm md:text-base text-slateGray">{slide2.item4.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 3,
                title: slide3.title,
                content: (
                    <div className="flex flex-col justify-center h-full p-6 md:p-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-12">{slide3.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 overflow-y-auto max-h-[400px] md:max-h-none pr-2">
                            <div className="bg-idePanel p-4 md:p-6 rounded-xl border border-ideBorder">
                                <h3 className="text-lg md:text-xl font-bold text-kotlinIndigo mb-2 md:mb-4">{slide3.languages.title}</h3>
                                <ul className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm text-slate-300">
                                    <li className="flex justify-between"><span>Kotlin</span> <span className="text-cyberMint">{slide3.languages.kotlin}</span></li>
                                    <li className="flex justify-between"><span>Java</span> <span className="text-white">{slide3.languages.java}</span></li>
                                    <li className="flex justify-between"><span>PHP</span> <span className="text-slate-500">{slide3.languages.php}</span></li>
                                </ul>
                            </div>
                            <div className="bg-idePanel p-4 md:p-6 rounded-xl border border-ideBorder">
                                <h3 className="text-lg md:text-xl font-bold text-kotlinIndigo mb-2 md:mb-4">{slide3.frameworks.title}</h3>
                                <ul className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm text-slate-300">
                                    {slide3.frameworks.items.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-idePanel p-4 md:p-6 rounded-xl border border-ideBorder">
                                <h3 className="text-lg md:text-xl font-bold text-kotlinIndigo mb-2 md:mb-4">{slide3.security.title}</h3>
                                <ul className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm text-slate-300">
                                    {slide3.security.items.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 4,
                title: slide4.title,
                content: (
                    <div className="flex flex-col justify-center h-full p-6 md:p-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{slide4.main_title}</h2>
                        <div className="bg-idePanel/50 border border-ideBorder p-4 md:p-8 rounded-xl mb-4 md:mb-8">
                            <div className="grid grid-cols-3 gap-2 md:gap-8 text-center">
                                <div>
                                    <p className="text-slateGray text-xs md:text-sm uppercase">{slide4.stats.locations.label}</p>
                                    <p className="text-2xl md:text-5xl font-bold text-cyberMint font-mono">{slide4.stats.locations.value}</p>
                                </div>
                                <div>
                                    <p className="text-slateGray text-xs md:text-sm uppercase">{slide4.stats.stack.label}</p>
                                    <p className="text-sm md:text-xl font-bold text-white font-mono mt-2 md:mt-4">{slide4.stats.stack.value}</p>
                                </div>
                                <div>
                                    <p className="text-slateGray text-xs md:text-sm uppercase">{slide4.stats.impact.label}</p>
                                    <p className="text-sm md:text-xl font-bold text-white font-mono mt-2 md:mt-4">{slide4.stats.impact.value}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 md:space-y-4 text-slate-300 text-sm md:text-lg">
                            <p><strong className="text-kotlinIndigo">{slide4.details.challenge.label}</strong> {slide4.details.challenge.text}</p>
                            <p><strong className="text-kotlinIndigo">{slide4.details.solution.label}</strong> {slide4.details.solution.text}</p>
                            <p><strong className="text-kotlinIndigo">{slide4.details.result.label}</strong> {slide4.details.result.text}</p>
                        </div>
                    </div>
                )
            }
        ];
    }, [dictionary]);

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

    if (!dictionary?.slides) return null;

    return (
        <div className="w-full max-w-5xl mx-auto h-[600px] bg-deepSpace border border-ideBorder rounded-xl shadow-2xl relative flex flex-col overflow-hidden">
            {/* Slide Content */}
            <div className="flex-1 overflow-auto bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem]">
                {slides[currentSlide] && slides[currentSlide].content}
            </div>

            {/* Controls */}
            <div className="bg-idePanel px-6 py-4 flex items-center justify-between border-t border-ideBorder">
                <div className="text-sm font-mono text-slate-500">
                    {dictionary.slides.controls.slide_prefix} {currentSlide + 1} / {slides.length}
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-2 rounded hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="p-2 rounded hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

