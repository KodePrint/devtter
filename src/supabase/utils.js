import { supabase } from './client'

export const loginWithGithub = async () => {
  const user = await supabase.auth.signIn({ provider: 'github' })
  return user
}

export const logoutSupabase = async () => {
  await supabase.auth.signOut()
}
