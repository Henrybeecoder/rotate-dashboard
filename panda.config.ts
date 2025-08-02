import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: '#f0f9ff' },
            100: { value: '#e0f2fe' },
            200: { value: '#bae6fd' },
            300: { value: '#7dd3fc' },
            400: { value: '#38bdf8' },
            500: { value: '#0ea5e9' },
            600: { value: '#0284c7' },
            700: { value: '#0369a1' },
            800: { value: '#075985' },
            900: { value: '#0c4a6e' },
          },
          secondary: {
            50: { value: '#f8fafc' },
            100: { value: '#f1f5f9' },
            200: { value: '#e2e8f0' },
            300: { value: '#cbd5e1' },
            400: { value: '#94a3b8' },
            500: { value: '#64748b' },
            600: { value: '#475569' },
            700: { value: '#334155' },
            800: { value: '#1e293b' },
            900: { value: '#0f172a' },
          },
          success: {
            50: { value: '#f0fdf4' },
            500: { value: '#22c55e' },
            600: { value: '#16a34a' },
          },
          error: {
            50: { value: '#fef2f2' },
            500: { value: '#ef4444' },
            600: { value: '#dc2626' },
          },
          warning: {
            50: { value: '#fffbeb' },
            500: { value: '#f59e0b' },
            600: { value: '#d97706' },
          }
        },
        fonts: {
          body: { value: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif' },
          heading: { value: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif' },
          mono: { value: 'JetBrains Mono, ui-monospace, monospace' }
        },
        fontSizes: {
          xs: { value: '0.75rem' },    // 12px
          sm: { value: '0.875rem' },   // 14px
          md: { value: '1rem' },       // 16px
          lg: { value: '1.125rem' },   // 18px
          xl: { value: '1.25rem' },    // 20px
          '2xl': { value: '1.5rem' },  // 24px
          '3xl': { value: '1.875rem' }, // 30px
          '4xl': { value: '2.25rem' },  // 36px
          '5xl': { value: '3rem' },     // 48px
          '6xl': { value: '3.75rem' }   // 60px
        },
        fontWeights: {
          thin: { value: '100' },
          extralight: { value: '200' },
          light: { value: '300' },
          normal: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
          extrabold: { value: '800' },
          black: { value: '900' }
        },
        spacing: {
          1: { value: '0.25rem' },
          2: { value: '0.5rem' },
          3: { value: '0.75rem' },
          4: { value: '1rem' },
          5: { value: '1.25rem' },
          6: { value: '1.5rem' },
          8: { value: '2rem' },
          10: { value: '2.5rem' },
          12: { value: '3rem' },
          16: { value: '4rem' },
          20: { value: '5rem' },
          24: { value: '6rem' }
        },
        radii: {
          none: { value: '0' },
          sm: { value: '0.125rem' },
          md: { value: '0.375rem' },
          lg: { value: '0.5rem' },
          xl: { value: '0.75rem' },
          '2xl': { value: '1rem' },
          full: { value: '9999px' }
        },
        shadows: {
          sm: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
          md: { value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
          lg: { value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
          xl: { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react'
})