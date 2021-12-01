// import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const filterReducer = createReducer("", {
  [actions.changefilter]: (_, { payload }) => payload,
});

export default filterReducer;
