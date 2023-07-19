import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import User from "../models/IUser";

const baseUrl = "http://localhost:8080/v1/api/user";

export const registerUser = createAsyncThunk(
  "data/register",
  async (user: User) => {
    const response = await axios.post(baseUrl + "/register", user);
    localStorage.setItem("authenticated", JSON.stringify(response.data.token));
    return response.data;
  }
);

export const loginUser = createAsyncThunk("data/login", async (user: User) => {
  const response = await axios.post(baseUrl + "/login", user);
  console.log("res", response);
  localStorage.setItem("authenticated", JSON.stringify(response.data.token));
  return response.data;
});

/*
export const login = createAsyncThunk("user/login", async (email, password) => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/login`,
      { email, password },
      config
    );
    // store user's token in local storage
    localStorage.setItem("authenticated", JSON.stringify(data.token));
    return data;
  } catch (error) {
    // return custom error message from API if any
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});
*/
