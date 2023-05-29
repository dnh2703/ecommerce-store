import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: boolean;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { getUsersFailure, getUsersStart, getUsersSuccess } =
  userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
