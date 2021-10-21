import type { AppProps } from 'next/app'

import { ClerkProvider } from '@clerk/nextjs'

import { Shield } from '@/components/routes/Shield'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Shield>
        <Component {...pageProps} />
      </Shield>
    </ClerkProvider>
  )
}
