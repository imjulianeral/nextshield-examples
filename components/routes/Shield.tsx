import { useRouter } from 'next/router'
import { NextShield, NextShieldProps } from 'next-shield'

import { Children } from '@/types/Components'
import { Loading } from './Loading'

export function Shield({ children }: Children) {
  const router = useRouter()

  const shieldProps: NextShieldProps<
    ['/profile', '/dashboard', '/users', '/users/[id]'],
    ['/', '/login']
  > = {
    router,
    isAuth: false,
    isLoading: false,
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
    userRole: undefined, // Must be undefined when isAuth is false & defined when is true
  }

  return <NextShield {...shieldProps}>{children}</NextShield>
}
