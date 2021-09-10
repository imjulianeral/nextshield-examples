import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function Dashboard() {
  const { signOut } = useAuth()

  return (
    <Layout title="Dashboard">
      <h1>Dashboard</h1>

      <button onClick={signOut}>Sign Out</button>
    </Layout>
  )
}
