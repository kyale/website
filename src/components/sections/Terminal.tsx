'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalProps {
    dictionary: any;
}

export const Terminal = ({ dictionary }: TerminalProps) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([]);
    const [isMinimized, setIsMinimized] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const t = dictionary.terminal;

    useEffect(() => {
        // Initial welcome message
        if (t?.welcome) {
            setOutput([t.welcome]);
        }
    }, [t]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [output, isMinimized]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        if (cleanCmd === 'help') {
            response = t.commands.help;
        } else if (cleanCmd === 'about') {
            response = t.commands.about;
        } else if (cleanCmd === 'skills') {
            response = t.commands.skills;
        } else if (cleanCmd === 'contact') {
            response = t.commands.contact;
        } else if (cleanCmd === 'clear') {
            setOutput([]);
            return;
        } else if (cleanCmd === '') {
            return;
        } else {
            response = t.commands.unknown;
        }

        setOutput(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    if (!t) return null;

    return (
        <section className="container mx-auto px-6 py-12 md:py-24 print:hidden">
            <div className={`w-full max-w-4xl mx-auto bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-slate-700 transition-all duration-300 ${isMinimized ? 'h-12' : 'h-[500px]'}`}>
                {/* Title Bar */}
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
                    <div className="flex items-center gap-2">
                        <TerminalIcon className="w-4 h-4 text-green-500" />
                        <span className="text-gray-300 text-sm font-mono">{t.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {isMinimized ? <Maximize2 className="w-4 h-4 text-gray-400" /> : <Minimize2 className="w-4 h-4 text-gray-400" />}
                    </div>
                </div>

                {/* Terminal Content */}
                {!isMinimized && (
                    <div className="p-4 font-mono text-sm md:text-base h-[calc(100%-3rem)] overflow-y-auto bg-black/90 text-green-400 scrollbar-thin scrollbar-thumb-gray-700">
                        <div className="space-y-2 whitespace-pre-wrap">
                            {output.map((line, i) => (
                                <div key={i} className={line.startsWith('>') ? 'text-white font-bold mt-4' : 'text-green-400 ml-2'}>
                                    {line}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-white">
                            <span className="text-green-500">guest@iman-portfolio:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                                placeholder={t.placeholder}
                            />
                        </div>
                        <div ref={bottomRef} />
                    </div>
                )}
            </div>
        </section>
    );
};
