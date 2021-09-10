import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function Login() {
  const { signIn } = useAuth()

  return (
    <Layout title="Login">
      <h1>Login</h1>
      <button onClick={signIn}>Sign In</button>
    </Layout>
  )
}
