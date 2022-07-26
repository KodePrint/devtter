import { useContext, useEffect } from 'react'
import { UserCtx } from 'context/UserContext'
import { authStateUser, supabase } from '../supabase/client'
import { useRouter } from 'next/router'

export const useUserCtx = () => {
  const { user, setUser, session, setSession } = useContext(UserCtx)
  const { user: authUser, session: authSession } = authStateUser()
  const router = useRouter()

  const loginWithGithub = async () => {
    const user = await supabase.auth.signIn({
      provider: 'github',
    })
    return user
  }

  useEffect(() => {
    if (authUser) {
      setUser(authUser)
      setSession(authSession)
      router.replace('/home')
    }
    setUser(authUser)
  }, [user, session, authSession, authUser, setUser, setSession])

  return { user, session, loginWithGithub }
}
