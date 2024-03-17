import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getTokenLocalStorage,
  isAuthenticated,
} from "../../utils/handleTokenUtils";
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
  loginNotification: boolean;
  boxProfile: boolean;
}
const token = getTokenLocalStorage(); // Lấy token từ localStorage
const loggedIn = isAuthenticated(); // Kiểm tra người dùng đã đăng nhập chưa
const initialState: State = {
  user: {},
  token: token ?? "",
  login: loggedIn,
  closeMenu: false,
  loginNotification: false,
  boxProfile: false,
};

export const appSlice = createSlice({
  name: "app", // Tên của slice
  initialState, // các state trong store
  reducers: {
    // Các reducers để xử lý các action tương ứng
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload; // Cập nhật trường 'user' trong state
    },
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload; // Cập nhật trường 'token' trong state
    },
    saveLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload; // Cập nhật trường 'login' trong state
    },
    saveCloseMenu: (state, action: PayloadAction<boolean>) => {
      state.closeMenu = action.payload; // Cập nhật trường 'closeMenu' trong state
    },
    loginNotification: (state, action: PayloadAction<boolean>) => {
      state.loginNotification = action.payload; // Cập nhật trường 'loginNotification' trong state
    },
    boxProfile: (state, action: PayloadAction<boolean>) => {
      state.boxProfile = action.payload; // Cập nhật trường 'boxProfile' trong state
    },
  },
});

export const {
  saveUser,
  saveToken,
  saveLogin,
  saveCloseMenu,
  loginNotification,
  boxProfile,
} = appSlice.actions;

export default appSlice.reducer;
