import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAuthenticated } from "../../../utils/handleTokenUtils";

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
  login: boolean;
  closeMenu: boolean;
  uploadFile: boolean;
  dialogLogin: boolean;
}

const loggedIn = isAuthenticated(); // Kiểm tra người dùng đã đăng nhập chưa
const initialState: State = {
  user: {},
  login: loggedIn,
  closeMenu: false,
  uploadFile: false,
  dialogLogin: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
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
    saveDialogLogin: (state, action: PayloadAction<boolean>) => {
      state.dialogLogin = action.payload;
    },
  },
});

export const {
  saveUser,
  saveLogin,
  saveCloseMenu,
  uploadFile,
  saveDialogLogin,
} = appSlice.actions;

export default appSlice.reducer;
