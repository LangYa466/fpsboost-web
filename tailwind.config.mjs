/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'rainbow-glow': 'rainbow-glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'rainbow-glow': {
          '0%': {
            'text-shadow': 
              '2px 2px 0px #ff0000, 4px 4px 0px #ff7f00, 6px 6px 0px #ffff00, 8px 8px 0px #00ff00, 10px 10px 0px #0000ff, 12px 12px 0px #4b0082, 14px 14px 0px #9400d3'
          },
          '25%': {
            'text-shadow': 
              '2px 2px 0px #ff7f00, 4px 4px 0px #ffff00, 6px 6px 0px #00ff00, 8px 8px 0px #0000ff, 10px 10px 0px #4b0082, 12px 12px 0px #9400d3, 14px 14px 0px #ff0000'
          },
          '50%': {
            'text-shadow': 
              '2px 2px 0px #ffff00, 4px 4px 0px #00ff00, 6px 6px 0px #0000ff, 8px 8px 0px #4b0082, 10px 10px 0px #9400d3, 12px 12px 0px #ff0000, 14px 14px 0px #ff7f00'
          },
          '75%': {
            'text-shadow': 
              '2px 2px 0px #00ff00, 4px 4px 0px #0000ff, 6px 6px 0px #4b0082, 8px 8px 0px #9400d3, 10px 10px 0px #ff0000, 12px 12px 0px #ff7f00, 14px 14px 0px #ffff00'
          },
          '100%': {
            'text-shadow': 
              '2px 2px 0px #ff0000, 4px 4px 0px #ff7f00, 6px 6px 0px #ffff00, 8px 8px 0px #00ff00, 10px 10px 0px #0000ff, 12px 12px 0px #4b0082, 14px 14px 0px #9400d3'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            'filter': 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 40px rgba(96, 165, 250, 0.4))',
            'transform': 'scale(1)'
          },
          '50%': {
            'filter': 'drop-shadow(0 0 30px rgba(96, 165, 250, 1)) drop-shadow(0 0 60px rgba(96, 165, 250, 0.6))',
            'transform': 'scale(1.02)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} 