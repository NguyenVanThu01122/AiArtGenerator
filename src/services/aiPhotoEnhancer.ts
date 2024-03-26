import axios from "axios";
import { privateAxios } from "./configs/axios";

export const generateAiPhotoEnhancer = (formData: FormData) =>
  axios.post("https://enhance-core.apero.vn/api/v1/image-enhance", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "arraybuffer",
  });

export const deductCreditsAiEnhancer = () =>
  privateAxios.get("/user/use-credits", {
    params: {
      type: "ENHANCE",
    },
  });
