import Avatar from 'components/Avatar'

const Devit = ({ id, avatar, username, message }) => {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          padding: 1rem 1.5rem;
          display: flex;
          border-bottom: 0.2rem solid #eee;
        }
        div {
          padding-right: 1.5rem;
        }
        p {
          line-height: 1.3;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Devit
