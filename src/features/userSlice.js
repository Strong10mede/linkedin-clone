import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

//createSlice => to represent some data inside the global store
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selectors
//first .user is name of userSlice
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
