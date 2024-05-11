import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getPricing } from "../../../services/pricing";
import { ERROR_MESSAGES } from "../../../utils/constants";
import i18n from "../../../i18n/i18n";

export const fetchPricing = createAsyncThunk(
  "pricing/fetchPricing",
  async (_, thunkAPI) => {
    try {
      const response = await getPricing();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        errorMessage: toast.error(i18n.t(ERROR_MESSAGES.SERVER_ERROR)),
      });
    }
  }
);
