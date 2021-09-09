import { Layout } from '@/components/routes/Layout'
import { UserProfile } from '@clerk/clerk-react'

export default function Profile() {
  return (
    <Layout title="Profile">
      <UserProfile path="/profile" routing="path" />
    </Layout>
  )
}
