import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieInfo } from "../../../components/MovieInfo/model/slice/movieInfoSlice";
import { getStatus } from "../../../components/MovieInfo/model/selectors/getStatus";
import { getMovieInfoError } from "../../../components/MovieInfo/model/selectors/getError";
import styles from "./MoviePage.module.scss";
import { useEffect, useState} from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { memoizedMovieInfo } from "../../../components/MovieInfo/model/selectors/getMovieInfo";
import { MovieInfo } from "../../../components/MovieInfo/model/types/movieInfo";
import { Text } from "../../../components/Text/Text";
import Table from "react-bootstrap/Table";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "../../../components/Button";
import cn from 'classnames'
import { UserRating } from "../../../components/UserRating";

interface UserRating{
  id: string;
  userRating: number
}

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movieInfo = useSelector(memoizedMovieInfo) as MovieInfo;
  const status = useSelector(getStatus);
  const error = useSelector(getMovieInfoError);
  const movieKeys: string[] = [];
  const navigate = useNavigate();
  const [rating, setRating] = useState(0)

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
    const ratings = localStorage.getItem('ratings') as string
    const userRating = JSON.parse(ratings)

    Object.entries(userRating).find(([key, value]) => {
      if(key === id){
        setRating(Number(value))
      }
    })
    
  }, [id])

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

  console.log(rating)

  return (
    <div className={styles.movieInner}>
      <div className={styles.movieHeader}>
        <Button color="transparent" size="m" onClick={() => navigate(-1)}>
          {<BsArrowLeft className={styles.arrowIcon} />}
        </Button>
        <Text
          role="title"
          content={movieInfo.Title}
          isBold
          className={styles.movieTitle}
        />
      </div>
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
      <Text
        role="text"
        content={movieInfo.Plot}
        className={styles.movieDescription}
      />
      <div className={styles.ratingsBox}>
      <div className={styles.movieRatings}>
      <Text role="title" content="Ratings" className={styles.ratingTitle}/>
      <div className={styles.ratingsWrapper}>
      {movieInfo.Ratings?.length && movieInfo.Ratings?.length > 0 ?
        movieInfo.Ratings?.map(item => (
          <div key={item.Source} className={cn(styles.ratingItem, {
            [styles.imdb]: item.Source === 'Internet Movie Database',
            [styles.tomatoes]: item.Source === 'Rotten Tomatoes',
            [styles.metacritic]: item.Source === 'Metacritic'
          })}>
            <span>{item.Source}</span>
            <span>{item.Value}</span>
          </div>
         ))
        : 
          <Text role="title" content="Ratings not Found"/>
      }
      </div>
      </div>
        <div className={styles.userRating}>
          <Text role="title" content={`Your ${movieInfo.Type} rating`} className={styles.ratingTitle}/>
          <UserRating rating={rating} setRating={setRating} isEditable id={id!}/>
        </div>
      </div>
      
    </div>
  );
}
