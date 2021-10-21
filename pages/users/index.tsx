import { UserButton } from '@clerk/nextjs'
import { Layout } from '@/components/routes/Layout'

export default function UserList() {
  return (
    <Layout title="User List">
      <h1>User List</h1>

      <div className="flex">
        <UserButton />
      </div>
    </Layout>
  )
}
