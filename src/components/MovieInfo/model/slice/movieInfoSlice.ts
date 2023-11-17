
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieInfo } from "../types/movieInfo";

export interface MovieInfoSliceSchema{
  movieInfo: MovieInfo | object;
  status: 'idle' | 'loading' | 'sucess' | 'failed';
  error: string | undefined
}


export const getMovieInfo = createAsyncThunk<MovieInfoSliceSchema, string>(
  'movieSlice/getMovieInfo',
  async (id, thunkApi) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=20d32d33&i=${id}&plot=full`)

    if(!response.ok){
      throw new Error
    }

    const data = await response.json()
    return data

    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
)

const initialState: MovieInfoSliceSchema = {
  movieInfo: {},
  status: 'idle',
  error: undefined
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
  extraReducers(building){
    building
    .addCase(getMovieInfo.pending, (state) => {
      state.status = "loading",
      state.error = undefined
    })

    .addCase(getMovieInfo.fulfilled, (state, action) => {
      state.status = "sucess",
      state.movieInfo = action.payload
      state.error = undefined
    })

    .addCase(getMovieInfo.rejected, (state, action) => {
      state.status = "failed",
      state.error = action.error.message
    })
  }
})

export const { actions: MovieInfoActions } = movieSlice;
export const { reducer: MovieInfoReducer } = movieSlice;
