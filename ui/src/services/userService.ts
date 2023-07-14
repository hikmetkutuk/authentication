import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import User from "../models/IUser";

const baseUrl = "http://localhost:8080/v1/api/user";

export const register = createAsyncThunk(
  "data/register",
  async (user: User) => {
    const response = await axios.post(baseUrl + "/register", user);
    localStorage.setItem("authenticated", JSON.stringify(response.data.token));
    return response.data;
  }
);
