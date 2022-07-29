import styles from './styles.module.scss'

const Avatar = ({ src, width = 4.9, height = 4.9, alt, text, withText }) => {
  return (
    <>
      <div>
        <img src={src} alt={alt} title={alt} />
        {withText && <strong>{text || alt}</strong>}
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          width: max-content;
        }
        img {
          border-radius: 99.99rem;
          height: ${height}rem;
          width: ${width}rem;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
        }

        img + strong {
          margin-left: 0.8rem;
        }
      `}</style>
    </>
  )
}

export default Avatar
