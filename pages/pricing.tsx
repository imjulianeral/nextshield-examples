import { useUser } from '@clerk/clerk-react'
import { ComponentShield } from 'next-shield'

import { Layout } from '@/components/routes/Layout'
import { Metadata } from '@/types/User'

export default function Pricing() {
  const { user, isLoading, isSignedIn } = useUser({ withAssertions: true })
  const userMetadata: Metadata = user?.publicMetadata

  return (
    <Layout title="Pricing">
      <h1>Pricing</h1>

      <ComponentShield
        showIf={isSignedIn(user) && !isLoading(user)}
        fallback={<p>You are unauthorized</p>}
      >
        <p>You are authorized</p>
      </ComponentShield>

      <ComponentShield RBAC showForRole="ADMIN" userRole={userMetadata?.role}>
        <p>You are an admin</p>
      </ComponentShield>
    </Layout>
  )
}
