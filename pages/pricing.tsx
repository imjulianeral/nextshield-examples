import { ComponentShield } from 'next-shield'
import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'
import { Metadata } from '@/types/User'

export default function Pricing() {
  const { user, isAuth, isLoading } = useAuth()
  const userMetadata = user?.user_metadata as Metadata

  return (
    <Layout title="Pricing">
      <h1>Pricing</h1>

      <ComponentShield showIf={isAuth && !isLoading}>
        <p>You are authenticated</p>
      </ComponentShield>
      <ComponentShield RBAC showForRole="ADMIN" userRole={userMetadata?.role}>
        <p>You are an ADMIN</p>
      </ComponentShield>
      <ComponentShield RBAC showForRole="EMPLOYEE" userRole={userMetadata?.role}>
        <p>You are an EMPLOYEE</p>
      </ComponentShield>
    </Layout>
  )
}
