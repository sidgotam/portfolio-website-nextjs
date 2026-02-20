
"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Layout, Smartphone, Terminal, Wrench
} from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        skills: ["Python", "C/C++", "JavaScript", "HTML/CSS", "PHP", "SQL (MySQL)"],
    },
    {
        title: "Frameworks & Libraries",
        icon: Layout,
        skills: ["React", "Node.js", "Flask", "Bootstrap", "TensorFlow", "scikit-learn"],
    },
    {
        title: "Technologies",
        icon: Terminal,
        skills: ["Machine Learning", "Deep Learning", "CNNs", "Data Science", "REST APIs", "Git", "WordPress"],
    },
    {
        title: "Tools",
        icon: Wrench,
        skills: ["Google Gemini API", "Kali Linux", "MS Excel", "Jupyter Notebook", "VS Code"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-text_secondary max-w-2xl mx-auto">
                        A comprehensive toolset for building robust and scalable web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-text_secondary hover:text-white hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
