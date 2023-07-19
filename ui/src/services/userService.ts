import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import User from "../models/IUser";

const baseUrl = "http://localhost:8080/v1/api/user";

export const registerUser = createAsyncThunk(
  "data/register",
  async (user: User) => {
    try {
      const response = await axios.post(baseUrl + "/register", user);
      localStorage.setItem(
        "authenticated",
        JSON.stringify(response.data.token)
      );
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk("data/login", async (user: User) => {
  try {
    const response = await axios.post(baseUrl + "/login", user);
    localStorage.setItem("authenticated", JSON.stringify(response.data.token));
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
});
