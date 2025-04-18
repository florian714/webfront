import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pafes/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,js,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily : {
                sans : ["var(--font-geist-sans)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },

        },
    },
    plugins: [],
};
export default config;