
"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_4smrhxj",
                "template_homg1je",
                formRef.current,
                "QgmYn8WNGk3gI_-LJ"
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    if (formRef.current) formRef.current.reset();
                    setTimeout(() => setSuccess(false), 5000);
                },
                (error) => {
                    console.error("FAILED...", error);
                    setLoading(false);
                    setError(true);
                    // Optional: You can set a more specific error message based on error.text
                    setTimeout(() => setError(false), 5000);
                }
            );
    };

    return (
        <section id="contact" className="py-20 bg-background relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-text_secondary max-w-2xl mx-auto">
                        Have a project in mind or want to discuss a job opportunity? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/3 flex flex-col gap-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                                <a href="mailto:siddharthakumar109@gmail.com" className="text-text_secondary hover:text-primary transition-colors">
                                    siddharthakumar109@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Location</h3>
                                <p className="text-text_secondary">
                                    Ambedkar Nagar, U.P., India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-2/3 bg-white/5 border border-white/10 p-8 rounded-2xl"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text_secondary">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-text_secondary">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-text_secondary">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text_secondary">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                            {success && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                                    <CheckCircle size={18} />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                                    <AlertCircle size={18} />
                                    <span>Failed to send message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
