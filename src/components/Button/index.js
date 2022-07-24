
import styles from './styles.module.scss'

const Button = ({children, onClick}) => {
  return (
    <>
      <button
        className={styles.btnGithub} 
        onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;