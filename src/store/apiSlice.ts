import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_ACCESS_KEY, API_URL } from "../config";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (page: number = 1) => ({
        url: `/photos?page=${page}`,
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
        method: "GET",
      }),
    }),
  }),
  reducerPath: "unsplash",
});

export const { useGetPhotosQuery } = apiSlice;
