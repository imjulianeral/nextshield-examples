import { useCallback, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { authStore } from '@/store'
import { supabase } from '@/db/connection'
import { UserProfile } from '@/types/User'

export function useAuth() {
  const { updateAuth, ...state } = useSnapshot(authStore)

  const signIn = useCallback(async () => {
    await supabase.auth.signIn({ provider: 'google' })
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  useEffect(() => {
    const getUserProfile = async () => {
      const { data: profile } = await supabase
        .from<UserProfile>('profiles')
        .select('id, role')
        .single()

      if (profile) {
        updateAuth({
          user: profile,
          isAuth: true,
          isLoading: false,
        })

        return
      }

      updateAuth({
        user: null,
        isAuth: false,
        isLoading: false,
      })
    }

    getUserProfile()

    const { data } = supabase.auth.onAuthStateChange(() => {
      getUserProfile()
    })

    const profile = supabase
      .from<UserProfile>('profiles')
      .on('UPDATE', payload => {
        updateAuth({
          user: payload.new,
          isAuth: true,
          isLoading: false,
        })
      })
      .subscribe()

    return () => {
      data?.unsubscribe()
      supabase.removeSubscription(profile)
    }
  }, [updateAuth])

  return {
    signIn,
    signOut,
    ...state,
  }
}
