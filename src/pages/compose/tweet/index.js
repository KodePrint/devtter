import Avatar from 'components/Avatar'
import Button from 'components/Button'
import { useState, useEffect, useRef } from 'react'
import Layout from 'containers/Layout'
import { useRouter } from 'next/router'
import { addDevit } from 'supabase/client'

// Import Custom Hooks
import { useUserCtx, USER_STATES } from 'hooks/useUserCtx'

const ComposeTweet = () => {
  const COMPOSE_STATES = {
    USER_NT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  }
  const { authUser } = useUserCtx()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NT_KNOWN)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const formRef = useRef(null)

  useEffect(() => {
    authUser === USER_STATES.NOT_LOGGED && router.push('/')
  }, [authUser])

  const handleSendDevit = () => {
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: authUser.avatar_url,
      content: message,
      userId: authUser.id,
      userName: authUser.user_name,
    })
      .then(() => {
        router.push('/home')
      })
      .catch((error) => {
        console.log(error)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }
  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <Layout>
        <header>
          <button onClick={router.back}>Back</button>
          <Button onClick={handleSendDevit} disabled={isButtonDisabled}>
            Devittear
          </Button>
        </header>
        <section>
          <div>
            <Avatar src={authUser?.avatar_url} />
          </div>
          <form ref={formRef}>
            <textarea
              onChange={handleChange}
              placeholder="¿Qué está pasando?"
            ></textarea>
          </form>
        </section>
      </Layout>
      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          height: 4.9rem;
        }
        section {
          display: flex;
          padding: 1.5rem;
          align-items: flex-start;
        }
        div {
          margin-right: 1.2rem;
        }
        form {
          width: 100%;
          padding-top: 0.4rem;
        }
        textarea {
          width: 100%;
          border: 0;
          min-height: 20rem;
          resize: none;
          font-size: 1.8rem;
          outline: 0;
          padding: 1.4rem 0;
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  )
}

export default ComposeTweet
