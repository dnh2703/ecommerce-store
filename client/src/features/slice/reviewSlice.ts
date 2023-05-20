import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../interfaces/review";

interface ReviewSlice {
  reviews: IReview[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ReviewSlice = {
  reviews: [],
  isLoading: false,
  error: false,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getReviewsStart: (state) => {
      state.isLoading = true;
    },
    getReviewsSuccess: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    },
    getReviewsFailure: (state) => {
      state.error = true;
    },
  },
});

export const { getReviewsStart, getReviewsFailure, getReviewsSuccess } =
  reviewSlice.actions;

export default reviewSlice.reducer;
