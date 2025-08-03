import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: '#E9FAF0' },
            100: { value: '#02983E' },
          },
          secondary: {
            500: { value: '#667085' },
            700: { value: '#525D73' },
            800: { value: '#334155' },
            900: { value: '#404A60' },
          },
          success: {
            50: { value: '#E9FAF0' },
            100: { value: '#E9FAF0' },
          },
          error: {
            50: { value: '#fff1f0' },
            100: { value: '#E5372B' },
          },
          warning: {
            50: { value: '#FFF9ED' },
            100: { value: '#EBA622' },
          },
          purple: {
            50: { value: '#F2EDFF' },
            100: { value: '#6236CC' },
          },
          blue: {
            50: { value: '#ECF5FF' },
            100: { value: '#0053B5' },
          },
          gray: {
            50: { value: '#f9f9f9' },
            100: { value: '#FAFAFA' },
            200: { value: '#F0F1F3' },
            300: { value: '#E0E2E7' },
            400: { value: '#858D9D' },
          },
          neutral: {
            600: { value: '#525D73' },
            500: { value: '#667085' },
          }
        },
        fonts: {
          body: { value: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif' },
          heading: { value: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif' },
          mono: { value: 'JetBrains Mono, ui-monospace, monospace' }
        },
        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          md: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' },
          '6xl': { value: '3.75rem' },
          '9.45px': { value: '9.45px' },
          '13px': { value: '13px' }
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
        lineHeights: {
          none: { value: '1' },
          tight: { value: '1.25' },
          snug: { value: '1.375' },
          normal: { value: '1.5' },
          relaxed: { value: '1.625' },
          loose: { value: '2' },
          '10.13px': { value: '10.13px' },
          '13.5px': { value: '13.5px' },
          '18px': { value: '18px' }
        },
        spacing: {
          0.5: { value: '0.125rem' },
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
          xl: { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
          'description-card': { value: '0px 1px 3px 0px #0000000D, 0px 1px 2px 0px #0000001A' },
          'sidebar-card': { value: '0px 16px 18px 0px #0000000F' },
          'dashboard-card': { value: '0px 1px 3px 0px #0000000D, 0px 1px 2px 0px #0000001A' },
          'table': { value: '0px 1px 3px 0px #0000000D, 0px 1px 2px 0px #0000001A' }
        }
      }
    }
  },

  outdir: 'styled-system',

  jsxFramework: 'react'
})