import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "../AppSlice";

// sử dụng combineReducers để gom nhóm các reducer
const rootReducer = combineReducers({
  app: appSlice.reducer,
  // Thêm các reducer khác nếu có
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
