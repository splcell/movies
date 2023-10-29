import { useSelector } from "react-redux";
import styles from "./MoviesList.module.scss";
import { getMovies } from "../model/selectors/getMovies";
import { getLoadingStatus } from "../model/selectors/getLoadingStatus";
import { getError } from "../model/selectors/getError";
import { getValue } from "../../Search/model/selectors/getValue";
import { getType } from "../../Select/model/selectors/getType";
import { memo, useCallback, useEffect, useState } from "react";
import { getAllMovies } from "../model/slice/moviesSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { Link } from "react-router-dom";
import { Text } from "../../Text/Text";
import { getPage } from "../../Pagination/model/selectors/getPage";

import { Button } from "../../Button";
import { PaginationActions } from "../../Pagination/model/slice/paginationSlice";
import { getTotalResults } from "../model/selectors/getTotalResults";
import { Error } from "../../Error/ui/Error";
import { Preloader } from "../../Preloader";
import { ScrollTop } from "../../ScrollTop";

export const MoviesList = memo(() => {
  const [scroll, setScroll] = useState(0);
  const dispatch = useAppDispatch();
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getLoadingStatus);
  const error = useSelector(getError);
  const query = useSelector(getValue);
  const type = useSelector(getType);
  const page = useSelector(getPage);
  const totalResults = useSelector(getTotalResults);
  const limit: number = 10;
  const totalPages = Math.ceil(+totalResults / limit);

  useEffect(() => {
    dispatch(getAllMovies({ query, type, page }));
    
  }, [query, type, page, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      setScroll(scroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  

  const changePage = useCallback(() => {
    dispatch(PaginationActions.changePage());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Preloader />
    )
  }

  if (error) {
    return(
      <Error>
        <Text role="title" content={error} />
      </Error>
    );
  }
  

  return (
    <div className={styles.moviesList}>
      {movies.length > 0 ? (
        <ul className={styles.movieCardList}>
          {movies.map((movie) => (
            <li key={movie.imdbID} className={styles.movieCard}>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : `https://via.placeholder.com/350x450?text=${movie.Title}`
                }
                alt={movie.Title}
                className={styles.movieCardImg}
              />
              <Text
                role="title"
                content={movie.Title}
                className={styles.moviesListTitle}
              />
              <div className={styles.movieCardInfo}>
                <div className={styles.movieCardBox}>
                  <span className={styles.type}>{movie.Type}</span>
                  <span className={styles.year}>{movie.Year}</span>
                </div>
                <Link
                  to={`/movie/${movie.imdbID}`}
                  className={styles.movieCardLink}
                >
                  More Info
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Error>
          <Text role="title" content="Movies not Found"></Text>
        </Error>
      )}
      {totalPages > 10 && movies.length > 0 && (
        <Button
          color={page < totalPages ? "primary" : "disabled"}
          size="m"
          onClick={changePage}
          className={styles.moreBtn}
          disabled={page < totalPages ? false : true}
        >
          Load More
        </Button>
      )}
      {scroll >= 1500 && <ScrollTop />}
    </div>
  );
});
