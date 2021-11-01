import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

interface Photo {
  id: number;
  alt: string;
  description: string;
  url: string;
}

export const photosAdapter = createEntityAdapter<Photo>();

export const photosSlice = createSlice({
  name: "photos",
  initialState: photosAdapter.getInitialState({ status: "loading" }),
  reducers: {
    photoAdded: photosAdapter.addOne,
  },
});

export const { selectById: selectPhotoById, selectIds: selectPhotoIds } =
  photosAdapter.getSelectors();

export const { photoAdded } = photosSlice.actions;

export default photosSlice.reducer;
