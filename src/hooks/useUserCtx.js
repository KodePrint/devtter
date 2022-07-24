import { useContext, useEffect } from 'react'
import { UserCtx } from 'context/UserContext'
import { authStateUser } from '../supabase/client'

export const useUserCtx = () => {
  const { user, setUser, session, setSession } = useContext(UserCtx)

  const { user: authUser, session: authSession } = authStateUser()

  useEffect(() => {
    if (!authSession) {
      setUser(null)
      setSession(null)
    }
    setUser(authUser)
    setSession(authSession)
  }, [user, session, authSession, authUser, setUser, setSession])

  return { user, session }
}
