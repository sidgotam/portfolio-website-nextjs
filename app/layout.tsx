
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Siddhartha Kumar | Web Developer",
    description: "Portfolio of Siddhartha Kumar, a premium Web Developer building modern web experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-text_primary selection:bg-primary/30 selection:text-primary`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
