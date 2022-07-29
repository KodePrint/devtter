import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Import Custom Hooks
import { useUserCtx, USER_STATES } from 'hooks/useUserCtx'

import Layout from 'containers/Layout'
import Devit from 'components/Devit'
import { fetchLatestDevits } from '../../supabase/client'
import Avatar from 'components/Avatar'
import DevitBtn from 'components/UI/DevitBtn'

const HomePage = () => {
  const { authUser, signOut } = useUserCtx()
  const [timeline, setTimeline] = useState([])
  const router = useRouter()

  useEffect(() => {
    authUser === USER_STATES.NOT_LOGGED && router.push('/')
  }, [authUser])

  useEffect(() => {
    authUser && authUser.avatar_url && fetchLatestDevits().then(setTimeline)
    // fetch('/api/statuses/home_timeline')
    //   .then((res) => res.json())
    //   .then(setTimeline)
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
          {timeline.map(
            ({
              id,
              createdAt,
              avatar,
              userName,
              content,
              likesCount,
              sharedCount,
            }) => {
              return (
                <Devit
                  key={id}
                  avatar={avatar}
                  userName={userName}
                  content={content}
                  createdAt={createdAt}
                  sharedCount={sharedCount}
                  likesCount={likesCount}
                />
              )
            }
          )}
        </section>

        <nav></nav>
      </Layout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        header > div {
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
