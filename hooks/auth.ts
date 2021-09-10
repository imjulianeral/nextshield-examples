import { useCallback, useEffect, useState } from 'react'
import { supabase } from '@/db/connection'
import { Auth } from '@/types/User'

export function useAuth() {
  const [state, setState] = useState<Auth>({
    user: supabase.auth.user(),
    isAuth: !!supabase.auth.user(),
    isLoading: false,
  })

  const signIn = useCallback(async () => {
    await supabase.auth.signIn({ provider: 'google' })
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        setState({
          user: session.user,
          isAuth: true,
          isLoading: false,
        })

        return
      }

      setState({
        user: null,
        isAuth: false,
        isLoading: false,
      })
    })

    return () => data?.unsubscribe()
  }, [])

  return {
    signIn,
    signOut,
    ...state,
  }
}
