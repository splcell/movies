import { MovieInfoSliceSchema } from "../../../components/MovieInfo/model/slice/movieInfoSlice";
import { MoviesListSliceSchema } from "../../../components/MoviesList/model/slice/moviesSlice";
import { PaginationSchema } from "../../../components/Pagination/model/types/paginationSchema";
import { SearchSchema } from "../../../components/Search/model/types/searchSchema";
import { SelectSchema } from "../../../components/Select/model/types/selectSchema";

export interface StoreSchema{
  search: SearchSchema,
  select: SelectSchema,
  moviesList: MoviesListSliceSchema,
  pagination: PaginationSchema,
  movieInfo: MovieInfoSliceSchema
}