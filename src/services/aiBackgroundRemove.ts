import axios from "axios";
import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export const removeBackground = (formData: FormData) =>
  axios.post(APIs.REMOVE_BACKGROUND, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });

// trừ credit khi sử dụng AI Art
export const deductCreditsRemoveBackground = () =>
  privateAxios.get(APIs.USE_CREDITS, {
    params: {
      type: "REMOVE_BACKGROUND",
    },
  });
