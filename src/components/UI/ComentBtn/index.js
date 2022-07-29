import Coment from 'components/icons/Coment'

const ComentBtn = ({ onClick, widht, height, content, isContent }) => {
  return (
    <>
      <button>
        <Coment />
        {isContent ? <span>{content}</span> : null}
      </button>
      <style jsx>{`
        button {
          dispaly: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          padding: 0 0.8rem;
        }
      `}</style>
    </>
  )
}

export default ComentBtn
