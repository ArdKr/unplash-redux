import defaultAxiosInstance from "axios";

import { API_ACCESS_KEY, API_URL } from "../config";

export const axios = defaultAxiosInstance.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_ACCESS_KEY}`,
  },
});

export const apiGetPhotos = (page: number) =>
  axios.get("/photos", { params: { page } });
