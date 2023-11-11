import { useSelector } from "react-redux";
import styles from "./MoviesList.module.scss";
import { getMovies } from "../model/selectors/getMovies";
import { getLoadingStatus } from "../model/selectors/getLoadingStatus";
import { getError } from "../model/selectors/getError";
import { getValue } from "../../Search/model/selectors/getValue";
import { getType } from "../../Select/model/selectors/getType";
import { memo, useEffect } from "react";
import { getAllMovies } from "../model/slice/moviesSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { Link } from "react-router-dom";
import { Text } from "../../Text/Text";
import { getPage } from "../../Pagination/model/selectors/getPage";
import { Error } from "../../Error/ui/Error";
import { Preloader } from "../../Preloader";
import { PaginationComponent } from "../../Pagination/ui/PaginationComponent";

export const MoviesList = memo(() => {
  const dispatch = useAppDispatch();
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getLoadingStatus);
  const error = useSelector(getError);
  const query = useSelector(getValue);
  const type = useSelector(getType);
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(getAllMovies({ query, type, page }));
  }, [query, type, page, dispatch]);


  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <Error>
        <Text role="title" content={error} />
      </Error>
    );
  }

  return (
    <div className={styles.moviesList}>
      {Array.isArray(movies) && movies.length > 0 ? (
        <ul className={styles.movieCardList}>
          {movies.map((movie) => (
            <li key={movie.imdbID} className={styles.movieCard}>
              <div className={styles.imgBox}>
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : `https://via.placeholder.com/350x450?text=${movie.Title}`
                  }
                  alt={movie.Title}
                  className={styles.movieCardImg}
                />
              </div>

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
      <PaginationComponent />
    </div>
  );
});
