import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";

interface UserState {
  users: IUser[];
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getUsersFailure, getUsersStart, getUsersSuccess } =
  userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
