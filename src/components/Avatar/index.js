import styles from './styles.module.scss'

const Avatar = ({ src, alt }) => {
  return (
    <>
      <img className={styles.className} src={src} alt={alt} title={alt} />
    </>
  )
}

export default Avatar
