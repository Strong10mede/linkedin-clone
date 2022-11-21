import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

//configure=> to setup the global store object which will register any reducers defined elsewhere
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
