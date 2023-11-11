import { memo, useCallback, useMemo} from "react";
import { useSelector } from "react-redux";
import { getPage } from "../model/selectors/getPage";
import { getTotalResults } from "../../MoviesList/model/selectors/getTotalResults";
import { useAppDispatch } from "../../../hooks/hooks";
import { PaginationActions } from "../model/slice/paginationSlice";
import styles from "./PaginationComponent.module.scss";
import cn from "classnames";
import { getNext, getPrev } from "..";
import { getError } from "../../MoviesList/model/selectors/getError";

export const PaginationComponent = memo(() => {
  const page = useSelector(getPage);
  const next = useSelector(getNext);
  const prev = useSelector(getPrev);
  const totalResults = useSelector(getTotalResults);
  const limit: number = 10;
  const totalPages = Math.ceil(+totalResults / limit);
  const dispatch = useAppDispatch();
  const error = useSelector(getError)

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
    dispatch(PaginationActions.incrementNext());
    dispatch(PaginationActions.incrementPrev());
  }, [next, totalPages, dispatch]);

  const prevPages = useCallback(() => {
    if (prev <= 0) {
      return;
    }
    dispatch(PaginationActions.decrementNext());
    dispatch(PaginationActions.decrementPrev());
  }, [prev, dispatch]);

  const lastPage = useCallback(() => {
    dispatch(PaginationActions.startEndNext(totalPages));
    dispatch(PaginationActions.startEndPrev(totalPages - 10));
  }, [totalPages, dispatch]);

  const firstPage = useCallback(() => {
    dispatch(PaginationActions.startEndNext(10));
    dispatch(PaginationActions.startEndPrev(0));
  }, [dispatch]);

  const showedPagination = useMemo(() => {
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
  }, [changePage, prev, next]);

  if(error){
    return null
  }

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
