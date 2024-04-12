import axios from "axios";
import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export const generateAiPhotoEnhancer = (formData: FormData) =>
  axios.post(APIs.GENERATE_ENHANCE_AI, formData, {
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
