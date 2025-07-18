/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
    ],
    darkMode: 'selector',
    plugins: [
        themer({
            palette: {
                extend: "energy",
            },
            radius: "smoothest",
            background: "light",
            border: "light",
            padding: "large",

        })
    ],
};
