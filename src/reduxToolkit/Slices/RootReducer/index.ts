import { combineReducers } from "@reduxjs/toolkit";
import { getListPricingSlice } from "../../Thunks/GetPricing/getPricingSlice";
import { getResultAiImgSlice } from "../../Thunks/GetResultAiImage/getResultAiImgSlice";
import { getListStyleSlice } from "../../Thunks/GetStyleAiImages/getStyleAiImgSlice";
import { appSlice } from "../AppSlice";

// sử dụng combineReducers để gom nhóm các reducer
const rootReducer = combineReducers({
  app: appSlice.reducer,
  getListStyle: getListStyleSlice.reducer,
  getListPricingSlice: getListPricingSlice.reducer,
  getResultAiImgSlice: getResultAiImgSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
