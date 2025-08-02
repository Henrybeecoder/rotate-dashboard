
'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

import { ThemeProvider } from '../contexts/themeContext'


const customConfig = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    tokens: {
      ...defaultConfig.theme?.tokens,
      fonts: {
        body: { value: 'var(--font-public-sans), sans-serif' },
        heading: { value: 'var(--font-public-sans), sans-serif' },
      },
    },
  },
  cssVarsRoot: ':root, [data-theme]',
}

const system = createSystem(customConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ChakraProvider value={system}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

