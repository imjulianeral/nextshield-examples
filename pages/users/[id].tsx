import { UserButton } from '@clerk/nextjs'
import { Layout } from '@/components/routes/Layout'

export default function SingleUser() {
  return (
    <Layout title="Single User">
      <h1>Single User</h1>

      <div className="flex">
        <UserButton />
      </div>
    </Layout>
  )
}
