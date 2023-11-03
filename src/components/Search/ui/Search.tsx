import { memo, useState } from "react";
import styles from './Search.module.scss'
import { useDispatch } from "react-redux";
import { SearchActions } from "../model/slice/searchSlice";
import { Button } from "../../Button";
import { MoviesListActions } from "../../MoviesList/model/slice/moviesSlice";
import { PaginationActions } from "../../Pagination/model/slice/paginationSlice";

export const Search = memo(() => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    };

    const onClickHandler = () => {
      dispatch(MoviesListActions.cleanMovies())
      dispatch(PaginationActions.removePage())
      dispatch(SearchActions.changeValue(value.toLowerCase()))
      setValue('')
    }

    return (
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={value}
          className={styles.input}
          onChange={onChangeHandler}
          placeholder="Search movies"
        />
        <Button color="secondary" size="m" onClick={onClickHandler} disabled={value.trim() === ''}>Search</Button>
      </div>
        
    );
  }
);