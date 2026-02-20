
"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Web Development Intern",
        company: "Cognifyz",
        period: "December 2025 - January 2026",
        description: "Completed a Web Development Internship at Cognifyz Technologies, where I worked on real-world web applications and strengthened my skills in frontend and backend development. During this period, I focused on writing clean, structured code, improving UI responsiveness, and collaborating effectively on assigned tasks.",
    },
    {
        role: "Freelance Web Developer",
        company: "Self-Employed",
        period: "2023 - 2024",
        description: "Built responsive websites for local businesses and improved their SEO rankings. utilized Tailwind CSS for rapid UI development.",
    },
    {
        role: "Information Technology Undergraduate",
        company: "Rajkiya Engineering College, Ambedkar Nagar",
        period: "2022 - 2026",
        description: "Pursuing B.Tech with strong academic foundation in Algorithms, Data Science, Machine Learning, Web Technologies, and Database Systems."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-text_secondary max-w-2xl mx-auto">
                        A timeline of my professional growth and academic achievements.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                <div className="hidden md:block w-5/12" />

                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0" />

                                <div className="md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 text-primary text-sm font-medium">
                                        <Briefcase size={14} />
                                        {exp.company}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-text_secondary text-xs mb-4">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </div>
                                    <p className="text-text_secondary text-sm">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
