/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primary: '#000',
            secondery: '#2a1454'
        }
    },
    plugins: [
        require('daisyui'),
    ],
}
