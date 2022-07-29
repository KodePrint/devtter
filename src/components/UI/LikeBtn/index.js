import Like from 'components/icons/Like'

const LikeBtn = ({ onClick, widht, height, content }) => {
  return (
    <>
      <button>
        <div>
          <Like />
        </div>
        <span>{content}</span>
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg {
        }
        button:hover div {
          background: green;
        }
        span {
          padding: 0 0.8rem;
        }
      `}</style>
    </>
  )
}

export default LikeBtn
