/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            desktop: {
                min: '1024px'
            },
            tablet: {
                max: '1023px',
                min: '700px'
            },
            mobile: { max: '700px' }
        }
    },
    plugins: []
};
