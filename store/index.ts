import { proxy } from 'valtio'

import { supabase } from '@/db/connection'
import type { AuthStore } from '@/types/User'

export const authStore = proxy<AuthStore>({
  user: undefined,
  isAuth: !!supabase.auth.user(),
  isLoading: false,
  updateAuth({ isAuth, isLoading, user }) {
    authStore.isAuth = isAuth
    authStore.isLoading = isLoading
    authStore.user = user
  },
})
