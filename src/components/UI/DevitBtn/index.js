import Link from 'next/link'
const DevitBtn = () => {
  return (
    <>
      <Link href="/compose/tweet">
        <a>Dvit</a>
      </Link>
      <style jsx>{`
        a {
          height: 5.6rem;
          width: 5.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(29, 155, 240, 1);
        }
      `}</style>
    </>
  )
}

export default DevitBtn
