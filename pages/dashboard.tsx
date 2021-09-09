import { Layout } from '@/components/routes/Layout'
import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <h1>Dashboard</h1>

      <div className="flex">
        <UserButton />
      </div>
    </Layout>
  )
}
