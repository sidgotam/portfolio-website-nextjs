
"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Zap } from "lucide-react";
import Image from "next/image";

const stats = [
    { icon: Code, label: "Clean Code", desc: "Maintainable & Scalable" },
    { icon: Layout, label: "Responsive", desc: "All Devices Support" },
    { icon: Smartphone, label: "Mobile First", desc: "Optimized UX" },
    { icon: Zap, label: "Performance", desc: "Fast Load Times" },
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                >
                    {/* Image Side */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-bold text-2xl">
                                Profile Photo
                            </div>

                            <Image
                                src="/Images/profile.jpg"
                                alt="Siddhartha Kumar"
                                fill
                                className="object-cover"
                            />

                        </div>
                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-text_secondary text-lg leading-relaxed mb-8">
                            I am a passionate Web Developer, UI/UX Designer, and Creative Coder. I build intelligent, scalable, and performance-driven web applications. With a strong foundation in full-stack development and applied machine learning, I specialize in creating end-to-end systems — from responsive frontend interfaces to secure backend APIs and AI-powered solutions. My work blends modern web technologies with practical problem-solving to deliver real-world impact.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text_primary">{stat.label}</h3>
                                        <p className="text-sm text-text_secondary">{stat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
