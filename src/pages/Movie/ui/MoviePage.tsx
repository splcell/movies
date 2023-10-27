import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../../components/MovieInfo/model/slice/movieInfoSlice";
import { getStatus } from "../../../components/MovieInfo/model/selectors/getStatus";
import { getMovieInfoError } from "../../../components/MovieInfo/model/selectors/getError";
import styles from "./MoviePage.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { memoizedMovieInfo } from "../../../components/MovieInfo/model/selectors/getMovieInfo";
import { MovieInfo } from "../../../components/MovieInfo/model/types/movieInfo";
import { Text } from "../../../components/Text/Text";
import Table from "react-bootstrap/Table";

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movieInfo = useSelector(memoizedMovieInfo) as MovieInfo;
  const status = useSelector(getStatus);
  const error = useSelector(getMovieInfoError);
  const movieKeys: string[] = [];

  Object.keys(movieInfo!).map((key) => {
    if (
      !key.includes("Poster") &&
      !key.includes("Ratings") &&
      !key.includes("Response") &&
      !key.includes("Plot") &&
      !key.includes("Title") &&
      !key.includes("Metascore") &&
      !key.includes("imdb") &&
      !key.includes("imdb")
    ) {
      movieKeys.push(key);
    }
  });

  useEffect(() => {
    if (id) {
      dispatch(getMovieInfo({ id }));
    }
  }, [id, dispatch]);

  if (status == "loading") {
    return <h2>Loading...</h2>;
  }

  if (error !== undefined) {
    return <h2>{error}</h2>;
  }

  movieKeys.pop();

  return (
    <div className={styles.movieInner}>
      <Text role="title" content={movieInfo.Title} isBold className={styles.movieTitle}/>
      
      <div className={styles.movieWrapper}>
        {movieInfo !== null ? (
          <img
            src={
              movieInfo.Poster !== "N/A"
                ? movieInfo.Poster
                : "https://via.placeholder.com/350x450?text=${movieInfo.Title}"
            }
            alt={movieInfo.Title}
            className={styles.moviePoster}
          ></img>
        ) : (
          "Movie Info not Found"
        )}

        <div className={styles.movieInfo}>
          <Table bordered>
            <thead></thead>
            <tbody>
              {movieKeys.map((key, index) => (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{movieInfo[key]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
          <Text role="text" content={movieInfo.Plot} className={styles.movieDescription}/>
    </div>
  );
}
