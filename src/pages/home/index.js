import Layout from 'containers/Layout'

const HomePage = () => {
  return (
    <>
      <Layout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section></section>
        <nav></nav>
      </Layout>
      <style jsx>{`
        header {
          border-bottom: 0.1rem solid #ccc;
          height: 4.9rem;
          position: fixed;
          width: 100%;
          top: 0;
        }
        nav {
          bottom: 0;
          border-top: 0.1rem solid #ccc;
          height: 4.9rem;
          position: fixed;
        }
        h2 {
          font-size: 2.1rem;
        }
        section {
          padding-top: 1rem;
        }
      `}</style>
    </>
  )
}

export default HomePage
