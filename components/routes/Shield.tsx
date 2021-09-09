import { useRouter } from 'next/router'
import { NextShield, NextShieldProps } from 'next-shield'
import { useUser } from '@clerk/nextjs'

import { Children } from '@/types/Components'
import { Metadata } from '@/types/User'
import { Loading } from './Loading'

export function Shield({ children }: Children) {
  const router = useRouter()
  const { user, isLoading, isSignedIn } = useUser({ withAssertions: true })
  const userMetadata: Metadata = user?.publicMetadata

  const shieldProps: NextShieldProps<
    ['/profile/[[...index]]', '/dashboard', '/users', '/users/[id]'],
    ['/', '/sign-in', '/sign-up']
  > = {
    router,
    isAuth: isSignedIn(user),
    isLoading: isLoading(user),
    privateRoutes: ['/profile/[[...index]]', '/dashboard', '/users', '/users/[id]'],
    publicRoutes: ['/', '/sign-in', '/sign-up'],
    hybridRoutes: ['/pricing'],
    loginRoute: '/sign-in',
    LoadingComponent: <Loading />,
    RBAC: {
      ADMIN: {
        grantedRoutes: ['/dashboard', '/profile/[[...index]]', '/users', '/users/[id]'],
        accessRoute: '/dashboard',
      },
      EMPLOYEE: {
        grantedRoutes: ['/profile/[[...index]]', '/dashboard'],
        accessRoute: '/profile/[[...index]]',
      },
    },
    userRole: userMetadata?.role,
  }

  return <NextShield {...shieldProps}>{children}</NextShield>
}
