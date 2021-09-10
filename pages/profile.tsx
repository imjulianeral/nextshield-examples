import { Layout } from '@/components/routes/Layout'
import { supabase } from '@/db/connection'
import { useAuth } from '@/hooks/auth'
import { Metadata } from '@/types/User'

export default function Profile() {
  const { signOut, user } = useAuth()
  const userMetadata = user?.user_metadata as Metadata
  const role = userMetadata.role === 'EMPLOYEE' ? 'ADMIN' : 'EMPLOYEE'

  return (
    <Layout title="Profile">
      <h1>Profile</h1>
      <button onClick={signOut}>Sign Out</button>
      <button
        onClick={async () => {
          await supabase.auth.update({
            data: {
              role: role,
            },
          })
        }}
      >
        Make {role}
      </button>
    </Layout>
  )
}
