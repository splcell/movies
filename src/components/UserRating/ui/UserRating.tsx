import { memo, useCallback, useState, KeyDownEvent, useEffect } from "react";
import { UserRatingProps } from "./UserRating.props";
import { GiRoundStar } from "react-icons/gi";
import styles from './Userrating.module.scss';
import cn from 'classnames'

export const UserRating = memo(({isEditable = false, rating, setRating, id, ...props}: UserRatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))


  const saveInStorage = (id: string, i: number) => {
    const ratingsString = localStorage.getItem('ratings');
    let ratings: { [key: string]: number } = {};
  
    if (ratingsString) {
      ratings = JSON.parse(ratingsString);
    }
  
    ratings[id] = i;
  
    localStorage.setItem('ratings', JSON.stringify(ratings));
  };


  const onClick = (i: number) => {
    if(!isEditable || !setRating){
      return;
    }
    setRating(i);
    saveInStorage(id ,i)
  }

  const handleSpace = (i: number, e: KeyDownEvent<SVGAElement>) => {
    if(e.code !== 'Space' || !setRating){
      return;
    }
    
    setRating(i);
    saveInStorage(id, i)
  }

  const constructRating = useCallback((currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => (
      <GiRoundStar className={cn(styles.star, {
        [styles.filled]: i < currentRating,
        [styles.editable]: isEditable
      })} onMouseEnter={() => changeDisplay(i + 1)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyDownEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
      />
    ));
    setRatingArray(updateArray);
  }, [isEditable, ratingArray, onClick, handleSpace])

  const changeDisplay = useCallback((i: number) => {
    if(!isEditable){
      return;
    }

    constructRating(i);
  }, [isEditable, constructRating])

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props} onMouseLeave={() => changeDisplay(rating)}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
})