
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                        Siddhartha Kumar
                    </h2>
                    <p className="text-text_secondary text-sm">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="https://github.com/sidgotam" target="_blank" className="text-text_secondary hover:text-primary transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/siddhartha-kumar-ab7846260/" target="_blank" className="text-text_secondary hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/siddgautamm/" target="_blank" className="text-text_secondary hover:text-primary transition-colors">
                        <Instagram size={20} />
                    </Link>
                    <Link href="https://x.com/imsidgautam" target="_blank" className="text-text_secondary hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="mailto:siddharthakumar109@gmail.com" className="text-text_secondary hover:text-primary transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>

                <p className="text-text_secondary text-xs text-center md:text-right">
                    © {new Date().getFullYear()} Siddhartha Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
