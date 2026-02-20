
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",
                accent: "#22D3EE",
                background: "#0F172A",
                text_primary: "#F8FAFC",
                text_secondary: "#94A3B8",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
};
export default config;
