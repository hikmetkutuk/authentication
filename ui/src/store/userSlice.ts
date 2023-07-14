import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

import User from "../models/IUser";

import { register } from "../services/userService";

interface UserState {
  user: User;
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      register.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      }
    );
  },
});

export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user.user;
