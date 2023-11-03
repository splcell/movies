import { memo } from "react";
import { Text } from "../../../Text/Text";
import { ReviewProps } from "./Review.props";
import styles from './Review.module.scss'

export const Review = memo(({content}: ReviewProps) => {
  return (
    <div className={styles.reviewWrapper}>
      <Text role="title" content={content}/>
    </div>
  )
})