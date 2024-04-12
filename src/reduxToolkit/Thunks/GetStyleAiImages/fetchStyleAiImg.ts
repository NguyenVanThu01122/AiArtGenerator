import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import i18n from "../../../i18n/i18n";
import { TypeListImgAiArt } from "../../../pages/AiArtGenerator/types";
import { getListImageStyle } from "../../../services/aiArtGenerator";
import { ERROR_MESSAGES } from "../../../utils/constants";

export const fetchListStyleAiImg = createAsyncThunk(
  "image/fetchListStyleAiImg",
  async (_, thunkAPI) => {
    try {
      const response = await getListImageStyle();
      return response.data.data.items?.map((item: TypeListImgAiArt) => ({
        id: item._id,
        image: item.key,
        name: item.name,
        config: item.config,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue({
        errorMessage: toast.error(i18n.t(ERROR_MESSAGES.SERVER_ERROR)),
      });
    }
  }
);
