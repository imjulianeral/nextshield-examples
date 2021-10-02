export interface UserProfile {
  id: string
  role: string
}

export interface Auth {
  isAuth: boolean
  isLoading: boolean
  user: UserProfile | null | undefined
}

export type AuthStore = {
  updateAuth: (params: Auth) => void
} & Auth
