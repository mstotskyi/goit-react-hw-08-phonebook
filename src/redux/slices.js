import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import {
  registerThunk,
  loginThunk,
  userCurrentThunk,
  userLogoutThunk,
} from "./thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
  },

  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      if (!action.payload.token) {
        toast.error("Пользователь с таким Email уже существует");
        return;
      }
      return {
        ...state,
        user: action.payload.user
          ? action.payload.user
          : { name: "", email: "" },
        token: action.payload.token ? action.payload.token : null,
        isLoading: false,
        isAuth: action.payload.token ? true : false,
      };
    },
    [registerThunk.rejected](state, action) {
      console.log(action);
      return {
        ...state,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      console.log(action.payload);
      if (action.payload.user) {
        toast.success(`Welcome, ${action.payload.user.name}`);
      } else {
        toast.error("Login or password is invalid!");
      }
      return {
        ...state,
        user: action.payload.user
          ? action.payload.user
          : { name: "", email: "" },
        token: action.payload.token ? action.payload.token : null,
        isLoading: false,
        isAuth: action.payload.token ? true : false,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    [userCurrentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [userCurrentThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuth: action.payload.message ? false : true,
      };
    },
    [userCurrentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [userLogoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [userLogoutThunk.fulfilled](state, action) {
      return {
        ...state,
        user: { name: "", email: "" },
        token: "",
        isLoading: false,
        isAuth: false,
      };
    },
    [userLogoutThunk.rejected](state, action) {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
});

export const { xxxx } = authSlice.actions;
export default authSlice.reducer;
