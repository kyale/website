'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const images = [
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_100.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_101.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_102.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_103.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_104.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_105.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_106.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_107.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_108.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_109.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_110.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_111.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_112.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_113.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_114.png',
    '/Iman_Ghatami_Portfolio/Iman_Ghatami_Architectural_Portfolio_115.png',
];

export const ArchitectureCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleLightbox = () => {
        setIsLightboxOpen(!isLightboxOpen);
    };

    return (
        <>
            <div className="relative group">
                {/* Main Image Display */}
                <div
                    className="relative w-full aspect-video bg-deepSpace rounded-lg overflow-hidden border border-ideBorder cursor-pointer"
                    onClick={toggleLightbox}
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Architecture Diagram ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                </div>

                {/* Controls */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-kotlinIndigo text-white rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-kotlinIndigo text-white rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                            className={`h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-kotlinIndigo w-8 shadow-glow-sm' : 'bg-white/60 hover:bg-white w-2'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                    <button
                        onClick={toggleLightbox}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div className="relative w-full max-w-7xl h-[80vh]">
                        <Image
                            src={images[currentIndex]}
                            alt={`Architecture Diagram ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};
