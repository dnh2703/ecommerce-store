import { createSlice } from "@reduxjs/toolkit";

interface UserInformation {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
}

interface userInfoShipping {
  userInfo: UserInformation;
}

const initialState: userInfoShipping = {
  userInfo: {
    email: "",
    country: "",
    lastName: "",
    address: "",
    city: "",
    firstName: "",
    apartment: "",
    postalCode: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserInfo: (state, actions) => {
      state.userInfo = actions.payload;
    },
  },
});

export const { getUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
