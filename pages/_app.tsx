import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'

import { Shield } from '@/components/routes/Shield'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const publicPages = ['/']
  const isPublicPage = publicPages.includes(pathname)

  return (
    <ClerkProvider>
      <Shield>
        <Component {...pageProps} />
      </Shield>
    </ClerkProvider>
  )
}
