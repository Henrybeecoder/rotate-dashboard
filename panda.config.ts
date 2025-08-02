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
            50: {value: '#F2EDFF'},
            100: {value: '#6236CC'},
          },

           blue: {
            50: {value: '#ECF5FF'},
            100: {value: '#0053B5'},
          },
          gray: {
            50: {value: '#f9f9f9'}
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
          '6xl': { value: '3.75rem' }   
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


  outdir: 'styled-system',

  jsxFramework: 'react'
})