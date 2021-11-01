import { combineReducers } from "@reduxjs/toolkit";
import photosReducer from "../photosStore/photosSlice";

export const rootReducer = combineReducers({
  photos: photosReducer,
});
