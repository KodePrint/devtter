import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const addDevit = async ({ avatar, content, userId, userName }) => {
  const { data, error } = await supabase.from('devit').insert([
    {
      avatar,
      content,
      likesCount: 0,
      sharedCount: 0,
      userName,
      userId,
    },
  ])
  if (error) throw error.message

  return data
}

export const fetchLatestDevits = async () => {
  const { data: devit, error } = await supabase.from('devit').select('*')

  if (error) throw error.message
  return devit.map((doc) => {
    const { createdAt } = doc
    const intl = new Intl.DateTimeFormat('es-GT')
    const normalizeCreatedAt = new Date(createdAt).toLocaleString('es-GT')

    return {
      ...doc,
      createdAt: normalizeCreatedAt,
    }
  })
}
