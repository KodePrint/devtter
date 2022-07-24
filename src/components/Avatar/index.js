import styles from './styles.module.scss'

const Avatar = ({ src, alt, text, withText }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} title={alt} />
      {withText && <strong>{text || alt}</strong>}
    </div>
  )
}

export default Avatar
