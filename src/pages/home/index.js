import { useState, useEffect } from 'react'
import Layout from 'containers/Layout'
import Devit from 'components/Devit'

const HomePage = () => {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <Layout>
        <header>
          <h2>Inicio</h2>
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
          width: 100%;
          top: 0;
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
          font-size: 2.1rem;
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
