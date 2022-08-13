/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                golos: ["Golos"],
            },
            screens: {
                xs: "400px",
            },
        },
    },
    plugins: [],
};
