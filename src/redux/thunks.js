import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_USER_URL = "https://connections-api.herokuapp.com";
const userLogin = "/users/login";
const userSignup = "/users/signup";
const userLogout = "/users/logout";
const userCurrent = "/users/current";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userSignup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json(); // {token:"", email:""}
      console.log(data);
      return data; //action.payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      return data; //action.payload
    } catch (error) {
      rejectWithValue({ error: error });
    }
  }
);

export const userCurrentThunk = createAsyncThunk(
  "users/current",

  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return rejectWithValue();
    }
    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      const data = await response.json(); // {token:"", email:""}
      return data; //action.payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);

export const userLogoutThunk = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const response = await fetch(BASE_USER_URL + userLogout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: state.auth.token,
        },
      });
      const data = await response.json(); // {token:"", email:""}
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);
