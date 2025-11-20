/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Paleta original del portfolio  
                'star-gold': '#ffe81f',
                'star-gold-dark': '#ffcc00',
                'space-dark': '#000',
                'space-blue': '#050529',
                'space-card': 'rgba(20, 20, 40, 0.95)',

                // Paleta del theme.css
                'mauve': '#A08083',
                'green-dark': '#172A20',
                'green-hero': '#1C2920',
                'pink-light': '#E2CAD9',
                'ink': '#221E16',
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
            },
            animation: {
                'move-stars': 'moveStars 200s linear infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
            },
            boxShadow: {
                'star-glow': '0 0 20px #ffe81f, 0 0 40px #ffcc00',
                'card-hover': '0 0 15px #ffe81f, 0 0 30px #ffcc00',
                'soft': '0 10px 22px rgba(16,30,30,.07)',
                'card': '0 8px 18px rgba(0,0,0,.06)',
                'project': '0 10px 24px rgba(16,30,30,.09)',
                'modal': '0 12px 36px rgba(0, 0, 0, 0.25)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}