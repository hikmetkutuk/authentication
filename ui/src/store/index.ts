import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
