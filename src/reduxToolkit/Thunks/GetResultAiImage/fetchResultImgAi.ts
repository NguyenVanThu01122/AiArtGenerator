import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import i18n from "../../../i18n/i18n";
import { getListImageAi, paramsType } from "../../../services/aiImageResult";
import { ERROR_MESSAGES } from "../../../utils/constants";

export const fetchResultImageAi = createAsyncThunk(
  "image/fetchImageList", // Tên action
  // Tham số thứ nhất là tên action, tham số thứ hai là hàm xử lý logic
  async (params: paramsType, thunkAPI) => {
    try {
      const response = await getListImageAi(params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        errorMessage: toast.error(i18n.t(ERROR_MESSAGES.SERVER_ERROR)),
      });
    }
  }
);
