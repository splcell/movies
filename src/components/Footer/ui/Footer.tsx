import styles from './Footer.module.scss'

export function Footer(){
  return(
    <footer className={styles.footer}>
      <p className={styles.copyright}>2023 &copy; copyright splcell</p>
    </footer>
  )
}