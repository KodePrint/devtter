import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
// Import Components
import { Github } from 'components/icons/Github'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Layout from 'containers/Layout'

// Import Custom Hooks
import { USER_STATES, useUserCtx } from 'hooks/useUserCtx'

// Import Styles
import styles from 'styles/index.module.scss'
import { useEffect, useState } from 'react'
import Loader from 'components/Loader'

export default function Home() {
  const { authUser, signInWithGithub } = useUserCtx()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={styles.section}>
          <h1>Devtter</h1>
          <h2>
            Talk about develpment <br /> with developers 👨‍💻💻🖥👩‍💻
          </h2>
          <div>
            {authUser === USER_STATES.NOT_LOGGED && (
              <Button onClick={signInWithGithub}>
                <Github fill="#fdfdfd" />
                Login with Github
              </Button>
            )}
            {/* {authUser && authUser.avatar_url && (
              <div>
                <Avatar
                  src={authUser.avatar_url}
                  alt={authUser.user_name}
                  text={authUser.user_name}
                  withText
                />
                <LogoutBtn />
              </div>
            )} */}

            {authUser === USER_STATES.NOT_KNOWN && <Loader />}
          </div>
        </section>
      </Layout>
    </>
  )
}
