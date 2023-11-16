import { memo, useCallback, useEffect, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { getPage } from "../model/selectors/getPage";
import { getTotalResults } from "../../MoviesList/model/selectors/getTotalResults";
import { useAppDispatch } from "../../../hooks/hooks";
import { PaginationActions } from "../model/slice/paginationSlice";
import styles from "./PaginationComponent.module.scss";
import cn from "classnames";
import { getAdaptiveNext, getAdaptivePrev, getNext, getPrev } from "..";
import { getError } from "../../MoviesList/model/selectors/getError";

export const PaginationComponent = memo(() => {
  const page = useSelector(getPage);
  const next = useSelector(getNext);
  const adaptiveNext = useSelector(getAdaptiveNext);
  const adaptivePrev = useSelector(getAdaptivePrev);
  const prev = useSelector(getPrev);
  const totalResults = useSelector(getTotalResults);
  const limit: number = 10;
  const totalPages = Math.ceil(+totalResults / limit);
  const dispatch = useAppDispatch();
  const error = useSelector(getError)
  const [width, setWidth] = useState(window.innerWidth);

  

  const items: number[] = [];

  for (let i = 1; i < totalPages; i++) {
    items.push(i);
  }

  const changePage = useCallback(
    (item: number) => {
      dispatch(PaginationActions.changePage(item));
    },
    [dispatch]
  );

  const nextPages = useCallback(() => {
    if (next >= totalPages) {
      return;
    }

    if(width <= 470){
      if(adaptiveNext >= totalPages){
        return
      }

      dispatch(PaginationActions.incrementAdaptiveNext());
      dispatch(PaginationActions.incrementAdaptivePrev());
    }

    dispatch(PaginationActions.incrementNext());
    dispatch(PaginationActions.incrementPrev());
  }, [next, totalPages, dispatch, width, adaptiveNext]);

  const prevPages = useCallback(() => {
    if (prev <= 0) {
      return;
    }

    if(width <= 470){
      if (adaptivePrev <= 0) {
        return;
      }

      dispatch(PaginationActions.decrementAdaptiveNext());
      dispatch(PaginationActions.decrementAdaptivePrev());
    }


    dispatch(PaginationActions.decrementNext());
    dispatch(PaginationActions.decrementPrev());
  }, [prev, dispatch, adaptivePrev, width]);

  const lastPage = useCallback(() => {
    if(width <= 470){
      dispatch(PaginationActions.startEndAdaptiveNext(totalPages));
      dispatch(PaginationActions.startEndAdaptivePrev(totalPages - 5));
    }

    dispatch(PaginationActions.startEndNext(totalPages));
    dispatch(PaginationActions.startEndPrev(totalPages - 10));
  }, [totalPages, dispatch, width]);

  const firstPage = useCallback(() => {
    if(width <= 470){
      dispatch(PaginationActions.startEndAdaptiveNext(5));
      dispatch(PaginationActions.startEndAdaptivePrev(0));
    }

    dispatch(PaginationActions.startEndNext(10));
    dispatch(PaginationActions.startEndPrev(0));
  }, [dispatch, width]);

  const showedPagination = useMemo(() => {
    if(width <= 470){
      return items.slice(adaptivePrev, adaptiveNext).map((item) => {
        return (
          <button
            key={item}
            onClick={() => changePage(item)}
            className={cn(styles.paginationBtn, {
              [styles.active]: page === item,
            })}
          >
            {item}
          </button>
        );
      });
    }


    return items.slice(prev, next).map((item) => {
      return (
        <button
          key={item}
          onClick={() => changePage(item)}
          className={cn(styles.paginationBtn, {
            [styles.active]: page === item,
          })}
        >
          {item}
        </button>
      );
    });
  }, [changePage, prev, next, width, adaptiveNext, adaptivePrev]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(error){
    return null
  }

  console.log(prev, next)

  return (
    <div className={styles.paginationInner}>
      {totalPages > 10 && <button onClick={firstPage}>{"<<"}</button>}
      {totalPages >= 20 && <button onClick={prevPages}>{"<"}</button>}
      <div className={styles.paginationBox}>{showedPagination}</div>
      {totalPages >= 20 && <button onClick={nextPages}>{">"}</button>}
      {totalPages > 10 && <button onClick={lastPage}>{">>"}</button>}
    </div>
  );
});
