import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { UserCtx } from 'context/UserContext'
import { authStateUser, supabase } from '../supabase/client'
export const useUserCtx = () => {
  const { authUser, setAuthUser } = useContext(UserCtx)
  const router = useRouter()

  // const user = JSON.parse(window.localStorage.getItem('supabase.auth.token'))
  // const user = authStateUser()

  useEffect(() => {
    checkAuth()
    window.addEventListener('hashchange', () => {
      checkAuth()
    })
  }, [authUser])

  const checkAuth = async () => {
    const user = supabase.auth.user()?.user_metadata

    if (user) {
      setAuthUser(user)
      router.pathname === '/' && router.push('/home')
    } else {
      setAuthUser(null)
    }
  }

  const signInWithGithub = async () => {
    supabase.auth.signIn({ provider: 'github' })
  }

  const signOut = async () => {
    supabase.auth.signOut()
    setAuthUser(null)
    router.replace('/')
  }

  return { authUser, setAuthUser, signInWithGithub, signOut }
}
