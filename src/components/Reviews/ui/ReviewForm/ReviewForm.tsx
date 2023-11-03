import { memo, useCallback, useState } from "react";
import { Button } from "../../../Button";
import { ReviewPropsForm } from "./ReviewForm.props";
import { useAppDispatch } from "../../../../hooks/hooks";
import { ReviewsListActions } from "../../model/slice/reviewSlice";
import { nanoid } from "@reduxjs/toolkit";
import styles from './ReviewForm.module.scss'

export const ReviewForm = memo(({movieId}: ReviewPropsForm) => {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target?.value)
  }, [])

  const addNewReview = useCallback(() => {
    if(text.trim() !== '' && movieId){
      dispatch(ReviewsListActions.addReview({id: nanoid(), body: text, movieId}))
      setText('')
    }
  }, [text, movieId, dispatch])

  return(

    <div className={styles.reviewFormWrapper}>
      <textarea value={text} onChange={onChangeText} className={styles.textarea}/>
      <Button color="secondary" size="m" onClick={addNewReview} disabled={text.trim() === ''}>Add Review</Button>
    </div>
  )
})