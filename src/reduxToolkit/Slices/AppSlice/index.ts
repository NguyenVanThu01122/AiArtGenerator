import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getTokenLocalStorage,
  isAuthenticated,
} from "../../../utils/handleTokenUtils";

export interface UserData {
  credits?: number;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  avatar?: string;
}
interface State {
  user: UserData;
  token: string;
  login: boolean;
  closeMenu: boolean;
  uploadFile: boolean;
}

const token = getTokenLocalStorage(); // Lấy token từ localStorage
const loggedIn = isAuthenticated(); // Kiểm tra người dùng đã đăng nhập chưa
const initialState: State = {
  user: {},
  token: token ?? "",
  login: loggedIn,
  closeMenu: false,
  uploadFile: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    saveLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
    saveCloseMenu: (state, action: PayloadAction<boolean>) => {
      state.closeMenu = action.payload;
    },
    uploadFile: (state, action: PayloadAction<boolean>) => {
      state.uploadFile = action.payload;
    },
  },
});

export const { saveUser, saveToken, saveLogin, saveCloseMenu, uploadFile } =
  appSlice.actions;

export default appSlice.reducer;
