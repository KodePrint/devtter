import Revit from 'components/icons/Revit'

const ReDevitBtn = ({ onClick, widht, height, content }) => {
  return (
    <>
      <button>
        <div>
          <Revit />
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

export default ReDevitBtn
