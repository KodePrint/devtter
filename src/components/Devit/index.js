import Avatar from 'components/Avatar'
import Revit from 'components/icons/Revit'
import Coment from 'components/icons/Coment'
import Shared from 'components/icons/Shared'
import Like from 'components/icons/Like'
import ComentBtn from 'components/UI/ComentBtn'
import ReDevitBtn from 'components/UI/ReDevitBtn'
import LikeBtn from 'components/UI/LikeBtn'

const Devit = ({
  id,
  avatar,
  userName,
  content,
  createdAt,
  likesCount,
  sharedCount,
}) => {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
          <nav>
            <ComentBtn />
            <ReDevitBtn content={sharedCount} />
            <LikeBtn content={likesCount} />
            <button>
              <Shared />
            </button>
          </nav>
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
          margin-top: 0.4rem;
        }
        section {
          display: flex;
          flex-direction: column;
        }
        nav {
          display: flex;
          margin-top: 1.2rem;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default Devit
