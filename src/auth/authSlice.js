import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, displayName } = action.payload;
      state.user = { email, displayName };
      state.isAuth = true;
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
