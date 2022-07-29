import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { UserCtx } from 'context/UserContext'
import { supabase } from '../supabase/client'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

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
  }, [])

  const checkAuth = async () => {
    setAuthUser(undefined)
    const user = supabase.auth.user()?.user_metadata

    if (user) {
      setAuthUser(user)
      router.pathname === '/' && router.replace('/home')
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
