import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette "The Architect & The Guardian"
        deepSpace: "#0F172A", // Background
        kotlinIndigo: "#7F52FF", // Headings / Primary
        cyberMint: "#10B981", // Success Metrics
        slateGray: "#94A3B8", // Secondary Text
        idePanel: "#1E293B", // Pour les panneaux latéraux (style VS Code/IntelliJ)
        ideBorder: "#334155",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Body & Headings
        mono: ['var(--font-jetbrains)', 'monospace'], // Technical Callouts
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(127, 82, 255, 0.15)',
        'glow': '0 0 20px rgba(127, 82, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(127, 82, 255, 0.25)',
        'mint-glow': '0 0 15px rgba(16, 185, 129, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
