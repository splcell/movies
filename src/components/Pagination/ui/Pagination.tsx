import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import { getPage } from "../model/selectors/getPage";
import { getTotalResults } from "../../MoviesList/model/selectors/getTotalResults";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../Button";
import { PaginationActions } from "../model/slice/paginationSlice";

export function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const totalResults = useSelector(getTotalResults);
  const limit: number = 10;
  const currentStart = localStorage.getItem("currentStart");
  const currentEnd = localStorage.getItem("currentEnd");
  const [start, setStart] = useState(Number(currentStart) || 0);
  const [end, setEnd] = useState(Number(currentEnd) || 9)

  const totalPages = Math.ceil(+totalResults / limit)

  const paginationItems: number[] = []

  for(let i = 1; i <= totalPages; i++){
    paginationItems.push(i)
  }

  const changePageNumber = useCallback((item: string) => {
    if(+page < totalPages){
      dispatch(PaginationActions.changePage(item))
    }
  }, [page, totalPages, dispatch])


  const showNextPages = useCallback(() => {
    if (totalPages > 10 && +end < totalPages) {
      setStart((prev) => +prev + 10);
      setEnd((prev) => +prev + 9);
    }
  }, [setStart, end, setEnd, totalPages]);

  const showPrevPages = useCallback(() => {
    if (totalPages > 10 && +end > 10 && start > 0) {
      setStart((prev) => +prev - 10);
      setEnd((prev) => +prev - 9);
    }

    if (totalPages > 10 && +end > 10 && start <= 0) {
      setStart(0);
      setEnd((prev) => +prev - 9);
    }

  }, [setStart, end, setEnd, totalPages, start]);

  const showLastPages = useCallback(() => {
    if (+end < totalPages) {
      setEnd(totalPages);
      setStart(totalPages - 9);
    }
  }, [end, totalPages]);

  const showFirstPages = useCallback(() => {
    if (+end > 10) {
      setEnd(9);
      setStart(0);
    }
  }, [end]);

  useEffect(() => {
    localStorage.setItem("currentStart", String(start));
    localStorage.setItem("currentEnd", String(end));
  }, [start, end]);

  


  return(
    <div className={styles.paginationInner}>
      <div className={styles.paginationBox}>
        {totalPages > 10 && (
          <>
            <button onClick={showFirstPages} disabled={end === +currentEnd! && true}>{"<<"}</button>
            <button onClick={showPrevPages}>{"<"}</button>
          </>
        )}

        {paginationItems.length > 0 &&
          paginationItems.slice(start, end).map((item) => (
            <Button
              key={item}
              className={+page === item ? styles.active : ""}
              onClick={() => changePageNumber(String(item))}
            >
              {item}
            </Button>
          ))}
        {totalPages > 10 && (
          <>
            <button onClick={showNextPages} disabled={end === totalPages && true}>{">"}</button>
            <button onClick={showLastPages}>{">>"}</button>
          </>
        )}
      </div>
    </div>
  );
}
