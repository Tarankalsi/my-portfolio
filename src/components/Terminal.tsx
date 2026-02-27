'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';

type TerminalValue = string | string[] | number | boolean | TerminalObject;

interface TerminalObject {
    [key: string]: TerminalValue;
}

interface TerminalProps {
    title?: string;
    data: TerminalObject;
    className?: string;
}

export default function Terminal({ title = '~/portfolio', data, className = '' }: TerminalProps) {
    const renderValue = (value: TerminalValue, isLast: boolean = false): JSX.Element => {
        // String value
        if (typeof value === 'string') {
            return (
                <>
                    <span className="text-yellow-300">"{value}"</span>
                    {!isLast && <span className="text-slate-600">,</span>}
                </>
            );
        }

        // Number value
        if (typeof value === 'number') {
            return (
                <>
                    <span className="text-cyan-300">{value}</span>
                    {!isLast && <span className="text-slate-600">,</span>}
                </>
            );
        }

        // Boolean value
        if (typeof value === 'boolean') {
            return (
                <>
                    <span className="text-orange-400">{value.toString()}</span>
                    {!isLast && <span className="text-slate-600">,</span>}
                </>
            );
        }

        // Array value
        if (Array.isArray(value)) {
            return (
                <>
                    <span className="text-slate-400">[</span>
                    {value.map((item: any, index) => (
                        <span key={index}>
                            {typeof item === 'string' && <span className="text-yellow-300">"{item}"</span>}
                            {typeof item === 'number' && <span className="text-cyan-300">{item}</span>}
                            {typeof item === 'boolean' && <span className="text-orange-400">{item.toString()}</span>}
                            {index < value.length - 1 && <span className="text-slate-600">, </span>}
                        </span>
                    ))}
                    <span className="text-slate-400">]</span>
                    {!isLast && <span className="text-slate-600">,</span>}
                </>
            );
        }

        // Nested object
        if (typeof value === 'object' && value !== null) {
            const entries = Object.entries(value);
            return (
                <>
                    <span className="text-cyan-400">{'{'}</span>
                    <div className="ml-8">
                        {entries.map(([nestedKey, nestedValue], index) => (
                            <div key={nestedKey} className="flex gap-2">
                                <span className="text-pink-400">{nestedKey}:</span>
                                {renderValue(nestedValue, index === entries.length - 1)}
                            </div>
                        ))}
                    </div>
                    <span className="text-cyan-400">{'}'}</span>
                    {!isLast && <span className="text-slate-600">,</span>}
                </>
            );
        }

        return <></>;
    };

    const entries = Object.entries(data);

    return (
        <section className={`py-32 px-6 lg:px-12 relative ${className}`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="terminal-window overflow-hidden"
                >
                    {/* Terminal Header */}
                    <div className="terminal-header flex items-center gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs text-slate-400 font-mono ml-4">{title}</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 code-block space-y-2 text-slate-300">
                        <div className="flex gap-2">
                            <span className="text-green-400">❯</span>
                            <span className="text-purple-400">const</span>
                            <span className="text-blue-400">data</span>
                            <span className="text-slate-400">=</span>
                            <span className="text-cyan-400">{'{'}</span>
                        </div>
                        <div className="ml-8">
                            {entries.map(([key, value], index) => (
                                <div key={key} className="flex gap-2">
                                    <span className="text-pink-400">{key}:</span>
                                    {renderValue(value, index === entries.length - 1)}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <span className="text-cyan-400">{'}'}</span>
                            <span className="text-slate-600">;</span>
                        </div>
                        <div className="mt-4 flex gap-2 text-slate-500">
                            <span className="text-green-400">❯</span>
                            <span className="animate-terminal-blink">_</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}