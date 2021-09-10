import { useRouter } from 'next/router'
import { NextShield, NextShieldProps } from 'next-shield'

import { Children } from '@/types/Components'
import { useAuth } from '@/hooks/auth'
import { Loading } from './Loading'
import { Metadata } from '@/types/User'

export function Shield({ children }: Children) {
  const router = useRouter()
  const { isAuth, isLoading, user } = useAuth()
  const userMetadata = user?.user_metadata as Metadata

  const shieldProps: NextShieldProps<
    ['/profile', '/dashboard', '/users', '/users/[id]'],
    ['/', '/login']
  > = {
    router,
    isAuth,
    isLoading,
    privateRoutes: ['/profile', '/dashboard', '/users', '/users/[id]'],
    publicRoutes: ['/', '/login'],
    hybridRoutes: ['/pricing'],
    loginRoute: '/login',
    LoadingComponent: <Loading />,
    RBAC: {
      ADMIN: {
        grantedRoutes: ['/dashboard', '/profile', '/users', '/users/[id]'],
        accessRoute: '/dashboard',
      },
      EMPLOYEE: {
        grantedRoutes: ['/profile', '/dashboard'],
        accessRoute: '/profile',
      },
    },
    userRole: userMetadata?.role, // Must be undefined when isAuth is false & defined when is true
  }

  return <NextShield {...shieldProps}>{children}</NextShield>
}
