import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchResultImageAi } from "./fetchResultImgAi";

const initialState = {
  listResultImg: [],
  imageAi: "",
  total: 0,
  loading: false,
  error: null,
};

export const getResultAiImgSlice = createSlice({
  name: "imageResultAi",
  initialState,
  reducers: {},
  //extraReducers: Là một thuộc tính của Slice, cho phép thêm các reducers bổ sung vào Slice
  extraReducers: (builder) => {
    builder
      // Thêm các case xử lý cho action fetchImageList
      .addCase(fetchResultImageAi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResultImageAi.fulfilled, (state, action) => {
        state.loading = false;
        state.listResultImg = action.payload.data;
        state.total = action.payload.total;
        state.imageAi = action.payload;
      })
      .addCase(
        fetchResultImageAi.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.errorMessage;
        }
      );
  },
});

export default getResultAiImgSlice.reducer;
