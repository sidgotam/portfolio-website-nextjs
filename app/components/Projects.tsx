
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Chatbot Using Gemini API ",
        description: "Built interactive chatbot leveraging Google Gemini API for real-time query processing and conversational AI ",
        tags: ["JavaScript", "HTML", "CSS", "Python", "AI"],
        demo: "#", // Add link if available
        github: "https://github.com/sidgotam/Chatbot",
        image: "/assets/chatbot.png",
    },
    {
        title: " College Sports Council Website",
        description: "A high-conversion landing page template with modern animations and responsive design.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        demo: "https://sportscouncilrecabn.netlify.app/",
        github: "https://github.com/sidgotam/Sports-Council-Website",
        image: "/assets/sport.jpg",
    },
    {
        title: "Deepfake Detection",
        description: "A machine learning project designed to detect deepfake media with high accuracy.",
        tags: ["Python", "ML", "Computer Vision"],
        demo: "#",
        github: "https://github.com/sidgotam",
        image: "/assets/deepfake.png",
    },
    {
        title: "Netflix Clone",
        description: "A responsive Netflix Clone built using HTML, CSS, and JavaScript, designed to replicate the core UI and user experience of the original Netflix platform.",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "#",
        github: "https://github.com/sidgotam/Netflix-Clone",
        image: "/assets/Netflix.png",
    },
    {
        title: "To-Do List App",
        description: "A productivity application for managing tasks efficiently with local storage support.",
        tags: ["React", "Vite", "JavaScript", "HTML", "CSS","CRUD Operations"],
        demo: "#",
        github: "https://github.com/sidgotam/todo-list",
        image: "/assets/todolist.jpg",
    },

    {
        title: "Landing Page",
        description: "A high-conversion landing page template with modern animations and responsive design.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        demo: "#",
        github: "https://github.com/sidgotam/Landing-Page",
        image: "/assets/Landingpage.jpg",
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-text_secondary max-w-2xl mx-auto">
                        Showcasing real-world solutions and technical expertise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full bg-gradient-to-br from-primary/30 to-accent/30">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text_secondary text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </Link>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-text_secondary hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Source Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
