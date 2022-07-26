import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Layout from 'containers/Layout'
import { useUserCtx } from 'hooks/useUserCtx'

const ComposeTweet = () => {
  const { user } = useUserCtx()

  // console.log(user)

  return (
    <>
      <Layout>
        <header>
          <button>Cancelar</button>
          <Button>Devittear</Button>
        </header>
        <section>
          <div>
            <Avatar src={user.avatar_url} />
          </div>
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
          padding: 0.6rem 1.5rem;
        }
        section {
          display: flex;
          padding: 0.6rem 1.5rem;
          align-items: flex-start;
          width: 100%;
        }
        div {
          min-width: 4.9rem;
          margin-right: 1.2rem;
        }
        form {
          width: 100%;
        }
        textarea {
          width: 100%;
          border: 0;
          min-height: 20rem;
          resize: none;
          padding: 1.2rem 0.6rem;
          outline: 0;
        }
      `}</style>
    </>
  )
}

export default ComposeTweet
