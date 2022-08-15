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
            fontSize: {
                mainheader: [
                    "54px",
                    {
                        lineHeight: "70px",
                    },
                ],
            },
            colors: {
                primary2: "#ED7138",
            },
        },
    },
    plugins: [],
};
