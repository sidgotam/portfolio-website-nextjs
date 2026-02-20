
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background py-20">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[120px] animate-pulse delay-2000" />
            </div>

            <div className="container relative z-10 px-6 text-center pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
                        Available for hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital experiences</span>
                    <br /> that matter.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-text_secondary text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    I’m Siddhartha, a passionate Web Developer specializing in crafting accessible,
                    pixel-perfect, and high-performance web applications. I focus on writing clean,
                    maintainable code and creating seamless user experiences that work flawlessly
                    across devices and browsers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                    >
                        <span className="mr-2">View Projects</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="group inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 font-medium text-text_primary transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    >
                        <span className="mr-2">Download Resume</span>
                        <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text_secondary"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-text_secondary to-transparent" />
            </motion.div>
        </section>
    );
}
