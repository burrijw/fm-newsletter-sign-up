const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
    content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            grey: "rgba(25, 24, 43, 0.25)",
            navy: {
                DEFAULT: "#242742",
                lighter: "#36384D",
            },
            vermillion: {
                DEFAULT: "#FF6155",
                faded: "hsla(4, 100%, 67%, 0.15)",
            },
            orange: "#FF6A3A",
            pink: "#FF527B",
        },
        fontFamily: {
            sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            heading: ["3.5rem", { lineHeight: "1", fontWeight: "700" }],
            "heading-sm": ["2.5rem", { lineHeight: "1", fontWeight: "700" }],
            body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
            "body-sm": [".75rem", { lineHeight: "1.5", fontWeight: "400" }],
        },
        borderRadius: {
            sm: "8px",
            md: "16px",
            lg: "36px",
        },
        listStyleImage: {
            success: "url('/images/success.svg')",
        },
        extend: {},
    },
    plugins: [],
};
