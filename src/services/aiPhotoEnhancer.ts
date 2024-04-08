import axios from "axios";
import { privateAxios } from "./configs/axios";
import { APIs } from "./configs/api";

export const generateAiPhotoEnhancer = (formData: FormData) =>
  axios.post("https://enhance-core.apero.vn/api/v1/image-enhance", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob", // responseType: "blob" để nhận response dạng blob
  });

export const deductCreditsAiEnhancer = () =>
  privateAxios.get(APIs.USE_CREDITS, {
    params: {
      type: "ENHANCE",
    },
  });
