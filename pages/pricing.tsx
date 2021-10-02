import { ComponentShield } from 'next-shield'
import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function Pricing() {
  const { user, isAuth, isLoading } = useAuth()

  return (
    <Layout title="Pricing">
      <h1>Pricing</h1>

      <ComponentShield showIf={isAuth && !isLoading}>
        <p>You are authenticated</p>
      </ComponentShield>
      <ComponentShield RBAC showForRole="ADMIN" userRole={user?.role}>
        <p>You are an ADMIN</p>
      </ComponentShield>
      <ComponentShield RBAC showForRole="EMPLOYEE" userRole={user?.role}>
        <p>You are an EMPLOYEE</p>
      </ComponentShield>
    </Layout>
  )
}
