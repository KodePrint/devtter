import styles from './styles.module.scss'

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={styles.btnGithub}
        onClick={onClick}
      >
        {children}
      </button>
      <style jsx>{`
        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }
      `}</style>
    </>
  )
}

export default Button
