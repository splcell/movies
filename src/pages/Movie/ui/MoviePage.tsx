import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieInfo } from "../../../components/MovieInfo/model/slice/movieInfoSlice";
import { getStatus } from "../../../components/MovieInfo/model/selectors/getStatus";
import { getMovieInfoError } from "../../../components/MovieInfo/model/selectors/getError";
import styles from "./MoviePage.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { memoizedMovieInfo } from "../../../components/MovieInfo/model/selectors/getMovieInfo";
import { MovieInfo } from "../../../components/MovieInfo/model/types/movieInfo";
import { Text } from "../../../components/Text/Text";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "../../../components/Button";
import cn from "classnames";
import { UserRating } from "../../../components/UserRating";
import { selectAllReviews } from "../../../components/Reviews/model/slice/reviewSlice";
import { Review } from "../../../components/Reviews";
import { ReviewForm } from "../../../components/Reviews/ui/ReviewForm/ReviewForm";
import classNames from "classnames";

interface UserRating {
  id: string;
  userRating: number;
}

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movieInfo = useSelector(memoizedMovieInfo) as MovieInfo;
  const status = useSelector(getStatus);
  const error = useSelector(getMovieInfoError);
  const movieKeys: string[] = [];
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const reviews = useSelector(selectAllReviews);

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
    const ratings = localStorage.getItem("ratings") as string;
    const userRating = JSON.parse(ratings);
    if (userRating) {
      Object.entries(userRating).find(([key, value]) => {
        if (key === id) {
          setRating(Number(value));
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      dispatch(getMovieInfo(id));
      navigate({
        pathname: `/movie/${id}/`,
        search: `?movie=${id}`
      });
    }
  }, [id, dispatch, navigate]);

  const movieReviews = useMemo(() => {
    return reviews.filter((review) => review.movieId === id);
  }, [reviews, id]);

  const splitArrays = useCallback(
    (key: string) => {
      if (key === "Writer" && movieInfo[key].split(",").length > 3) {
        return (
          movieInfo[key].split(",")[0] + "," + movieInfo[key].split(",")[1]
        );
      }

      if (key === "Actors" && movieInfo[key].split(",").length > 3) {
        return (
          movieInfo[key].split(",")[0] + "," + movieInfo[key].split(",")[1]
        );
      }

      //@ts-ignore
      return movieInfo[key];
    },
    [movieInfo]
  );

  if (status == "loading") {
    return (
      <div className={styles.movieInner}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error !== undefined) {
    return <h2>{error}</h2>;
  }

  movieKeys.pop();

  return (
    <div className={styles.movieInner}>
      <div className={styles.movieHeader}>
        <Button color="transparent" size="m" onClick={() => navigate('/')}>
          {<BsArrowLeft className={styles.arrowIcon} />}
        </Button>
        <Text
          role="title"
          content={movieInfo.Title}
          isBold
          className={styles.movieTitle}
        />
        <div className={styles.headerRating}>
          <span
            className={classNames(styles.rate, {
              [styles.bad]: Number(movieInfo.imdbRating) < 5,
              [styles.mid]:
                Number(movieInfo.imdbRating) > 5 &&
                Number(movieInfo.imdbRating) < 7,
              [styles.good]: Number(movieInfo.imdbRating) > 7,
            })}
          >
            {movieInfo.imdbRating} IMDB
          </span>
          <span className={styles.headerVotes}>
            {movieInfo.imdbVotes} votes
          </span>
        </div>
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
          <ul className={styles.movieInfoList}>
            {movieKeys.map((key, index) => (
              <li key={index} className={styles.movieInfoItem}>
                <span>{key}: </span>
                {/* @ts-ignore */}
                <span>{splitArrays(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Text
        role="title"
        content="Description"
        isBold
        className={styles.movieDescriptionTitle}
      />
      <Text
        role="text"
        content={movieInfo.Plot}
        className={styles.movieDescription}
      />
      <Text
        role="title"
        content="Ratings"
        className={styles.ratingTitle}
        isBold
      />
      <div className={styles.ratingsBox}>
        <div className={styles.movieRatings}>
          <div className={styles.ratingsWrapper}>
            {movieInfo.Ratings?.length && movieInfo.Ratings?.length > 0 ? (
              movieInfo.Ratings?.map((item) => (
                <div
                  key={item.Source}
                  className={cn(styles.ratingItem, {
                    [styles.imdb]: item.Source === "Internet Movie Database",
                    [styles.tomatoes]: item.Source === "Rotten Tomatoes",
                    [styles.metacritic]: item.Source === "Metacritic",
                  })}
                >
                  <span>{item.Source}</span>
                  <span>{item.Value}</span>
                </div>
              ))
            ) : (
              <Text role="title" content="Ratings not Found" />
            )}
          </div>
        </div>
        <div className={styles.userRating}>
          <Text
            role="title"
            content={`Your ${movieInfo.Type} rating`}
            className={styles.ratingTitle}
          />
          <UserRating
            rating={rating}
            setRating={setRating}
            isEditable
            id={id!}
          />
        </div>
      </div>
      <div className={styles.movieReviewsWrapper}>
        <Text
          role="title"
          content="Reviews"
          isBold
          className={styles.movieReviews}
        />
        {movieReviews.length > 0 ? (
          movieReviews.map((review) => (
            <Review key={review.id} content={review.body} />
          ))
        ) : (
          <Text role="title" content="Reviews not Found" />
        )}
        <ReviewForm movieId={id ? id : ""} />
      </div>
    </div>
  );
}
