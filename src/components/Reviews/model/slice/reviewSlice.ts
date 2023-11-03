import { EntityState, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { Review } from "../types/review";
import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export interface ReviewsSchema extends EntityState<Review>{
  reviews: Review[]
}

const reviewsAdapter = createEntityAdapter<Review>();
const initialState = reviewsAdapter.getInitialState();

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: reviewsAdapter.addOne
  },
});

export const { actions: ReviewsListActions } = reviewsSlice;
export const { reducer: ReviewsistReducer } = reviewsSlice;

export const {
  selectAll: selectAllReviews,
  selectById: selectReviewById,
  selectIds: selectReviewIds
} = reviewsAdapter.getSelectors((state: StoreSchema) => state.reviews)

export const selectReviewsByMovie = createSelector(
  [selectAllReviews, (state, movieId) => movieId],
  (reviews, movieId) => reviews.filter(review => review.movieId === movieId)
)