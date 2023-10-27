import styles from './Filters.module.scss'
import { FiltersProps } from './Filters.props'

export function Filters({children}: FiltersProps){
  return(
    <div className={styles.filtersBox}>{children}</div>
  )
}