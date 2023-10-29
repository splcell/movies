import styles from './Error.module.scss';
import { ErrorProps } from './Error.props';

export function Error({children}: ErrorProps){
  return(
    <div className={styles.errorBox}>
      {children}
    </div>
  )
}