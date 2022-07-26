import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const authStateUser = () => {
  const user = supabase.auth.user()
  if (!user) {
    return {
      user: null,
      session: false,
    }
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event !== 'SIGNED_IN') {
      return {
        user: null,
        session: false,
      }
    }
    return {
      user: session.user.user_metadata,
      session: true,
    }
  })
  return {
    user: user.user_metadata,
    session: true,
  }
}
