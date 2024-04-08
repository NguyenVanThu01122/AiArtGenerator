import axios from "axios";
import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export const removeBackground = (formData: FormData) =>
  axios.post(
    "https://bgrm-enhance-wrapper.apero.vn/api/v1/bg-remove",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

// trừ credit khi sử dụng AI Art
export const deductCreditsRemoveBackground = () =>
  privateAxios.get(APIs.USE_CREDITS, {
    params: {
      type: "REMOVE_BACKGROUND",
    },
  });
