import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    user: [],
    loading: false,
    errro: null,
  },
  //   reducers: {},
});

export default userDetail.reducer;
