import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Layout from 'containers/Layout'
import { useRouter } from 'next/router'

// Import Custom Hooks
import { useUserCtx } from 'hooks/useUserCtx'

const ComposeTweet = () => {
  const { authUser } = useUserCtx()
  const router = useRouter()

  return (
    <>
      <Layout>
        <header>
          <button onClick={router.back}>Back</button>
          <Button>Devittear</Button>
        </header>
        <section>
          <Avatar src={authUser?.avatar_url} />
          <form>
            <textarea placeholder="¿Que esta pasando?"></textarea>
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
        textarea {
          width: 100%;
          border: 0;
          padding: 1.5rem;
          resize: none;
          font-size: 1.8rem;
          outline: 0;
        }
      `}</style>
    </>
  )
}

export default ComposeTweet
