import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header(){
  return(
    <header className={styles.header}>
      <Link to='/' className={styles.headerLink}>Movies Catalog</Link>
    </header>
  )
}