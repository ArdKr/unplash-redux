import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../apiSlice";
import { rootReducer } from "./rootReducer";

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
