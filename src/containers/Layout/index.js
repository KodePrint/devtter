import styles from './styles.module.scss'

const Layout = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default Layout
