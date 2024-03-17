import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../RootReducer";

const store = configureStore({
  reducer: rootReducer, // Lấy các reducer từ rootReducer.,
});

export default store;
