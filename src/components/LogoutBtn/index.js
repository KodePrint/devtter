import { useRouter } from 'next/router'
import { logoutSupabase } from 'supabase/utils'

const LogoutBtn = () => {
  const router = useRouter()

  const handleLogout = () => {
    logoutSupabase()
    router.push('/')
  }
  return <button onClick={handleLogout}>Logout</button>
}
export default LogoutBtn
