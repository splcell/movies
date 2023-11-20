import { configureStore } from "@reduxjs/toolkit";
import { SearchReducer } from "../../../components/Search/model/slice/searchSlice";
import { SelectReducer } from "../../../components/Select/model/slice/selectSlice";
import { MovieListReducer } from "../../../components/MoviesList/model/slice/moviesSlice";
import { PaginationReducer } from "../../../components/Pagination/model/slice/paginationSlice";
import { MovieInfoReducer } from "../../../components/MovieInfo/model/slice/movieInfoSlice";
import { ReviewsistReducer } from "../../../components/Reviews/model/slice/reviewSlice";



const store = configureStore({
  reducer: {
    search: SearchReducer,
    select: SelectReducer,
    moviesList: MovieListReducer,
    pagination: PaginationReducer,
    movieInfo: MovieInfoReducer,
    reviews: ReviewsistReducer
  },
})

export const createReduxStore = () => {
  
  return store
}


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch