import { combineReducers } from "@reduxjs/toolkit";

import { apiSlice } from "../apiSlice";
import photosReducer from "../photosStore/photosSlice";

export const rootReducer = combineReducers({
  // photos: photosReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
