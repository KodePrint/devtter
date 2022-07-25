import Button from 'components/Button'
import Layout from 'containers/Layout'

const ComposeTweet = () => {
  return (
    <>
      <Layout>
        <header>
          <button>Cancelar</button>
          <Button>Devittear</Button>
        </header>
        <textarea placeholder="¿Que esta pasando?"></textarea>
      </Layout>
      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
        }
        textarea {
          width: 100%;
          border: 0;
          padding: 1.5rem;
          resize: none;
          outline: 0;
        }
      `}</style>
    </>
  )
}

export default ComposeTweet
