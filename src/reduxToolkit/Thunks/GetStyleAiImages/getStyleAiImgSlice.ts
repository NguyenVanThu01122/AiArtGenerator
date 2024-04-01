import { createSlice } from "@reduxjs/toolkit";
import { StyleType } from "../../../pages/AiArtGenerator/types";
import { fetchListStyleAiImg } from "./fetchStyleAiImg";

interface InitialState {
  listStyle: StyleType[];
  error: any;
}

const initialState: InitialState = {
  listStyle: [],
  error: null,
};

export const getListStyleSlice = createSlice({
  name: "listStyle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListStyleAiImg.pending, (state) => {
        state.listStyle = [];
      })
      .addCase(fetchListStyleAiImg.fulfilled, (state, action) => {
        state.listStyle = action.payload;
      })
      .addCase(fetchListStyleAiImg.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default getListStyleSlice.reducer;
