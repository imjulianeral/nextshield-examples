import { useCallback } from 'react'
import { Layout } from '@/components/routes/Layout'
import { supabase } from '@/db/connection'
import { useAuth } from '@/hooks/auth'

export default function Profile() {
  const { signOut, user } = useAuth()
  const role = user?.role === 'EMPLOYEE' ? 'ADMIN' : 'EMPLOYEE'

  const changeRole = useCallback(async () => {
    await supabase.from('profiles').update({ role })
  }, [role])

  return (
    <Layout title="Profile">
      <h1>Profile</h1>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={changeRole}>Change my user role to {role}</button>
    </Layout>
  )
}
