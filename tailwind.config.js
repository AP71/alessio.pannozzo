/** @type {import('tailwindcss').Config} */


module.exports = {
    content: ["./src/**/*.{html,js}",
        "./src/components/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#111D4A',
                secondary: '#89A6FB',
                'my-white': '#FBFFFE',
                'my-gray': '#6A706E'
            },
            flex: {
                '2': '2 2 0%'
            }
        },

    },
    plugins: [],
}
