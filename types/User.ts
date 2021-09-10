import { User } from '@supabase/gotrue-js'

export interface Metadata {
  avatar_url: string
  full_name: string
  role: string
}

export interface Auth {
  isAuth: boolean
  isLoading: boolean
  user: User | null | undefined
}
