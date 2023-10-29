import { memo, useCallback } from "react";
import { BsArrowUp } from "react-icons/bs";
import styles from './ScrollTop.module.scss'

export const ScrollTop = memo(() => {

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }, [])

  return(
    <button className={styles.topBtn} onClick={scrollToTop}>
      {<BsArrowUp className={styles.topArrow}/>}
    </button>
  )
})