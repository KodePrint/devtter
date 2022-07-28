import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Import Custom Hooks
import { useUserCtx } from 'hooks/useUserCtx'

import Layout from 'containers/Layout'
import Devit from 'components/Devit'
import { logout } from '../../supabase/client'
import Avatar from 'components/Avatar'

const HomePage = () => {
  const { authUser, signOut } = useUserCtx()
  const [timeline, setTimeline] = useState([])
  const router = useRouter()

  useEffect(() => {
    authUser &&
      authUser.avatar_url &&
      fetch('/api/statuses/home_timeline')
        .then((res) => res.json())
        .then(setTimeline)
  }, [authUser])

  return (
    <>
      <Layout>
        <header>
          <div>
            <button>
              <Avatar src={authUser?.avatar_url} width={3.5} height={3.5} />
            </button>
            <h2>Inicio</h2>
          </div>
          <button onClick={signOut}>Logout</button>
        </header>

        <section>
          {timeline.map(({ id, avatar, username, message }) => {
            return (
              <Devit
                key={id}
                avatar={avatar}
                username={username}
                message={message}
              />
            )
          })}
        </section>

        <nav></nav>
      </Layout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          border-bottom: 0.1rem solid #eee;
          background: #ffffffaa;
          backdrop-filter: blur(0.5rem);
          height: 4.9rem;
          position: sticky;
          justify-content: space-between;
          width: 100%;
          padding: 1rem 1.5rem;
          top: 0;
        }
        div {
          display: flex;
          align-items: center;
        }
        button {
          cursor: pointer;
        }
        nav {
          bottom: 0;
          border-top: 0.1rem solid #eee;
          height: 4.9rem;
          position: sticky;
          width: 100%;
          background: #fff;
        }
        h2 {
          font-size: 1.6rem;
          font-weight: 800;
          padding-left: 1.5rem;
        }
        section {
          // padding-top: 4.9rem;
          // overflow-y: scroll;
          // max-height: calc(100vh - (4.9rem * 2));
          transition: 0.3s all ease;
        }
        @media (min-width: 576px) {
          section {
            padding-top: 0;
          }
        }
      `}</style>
    </>
  )
}

export default HomePage
