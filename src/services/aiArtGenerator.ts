import axios from "axios";
import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";
interface ImageConfig {
  step: number;
  style: string;
  alpha: number;
  scale: number;
  positivePrompt: string;
  negativePrompt: string;
}
interface ImageUploadData {
  url: string;
  config: ImageConfig;
}

export const getListImageStyle = () => axios.get(APIs.GET_STYLES);

export const generateAiImage = (formData: FormData) =>
  axios.post(APIs.CREATE_IMAGE_AI, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: 'blob',
  });

// trừ credit khi sử dụng AI Art
export const deductCreditsAiArt = () =>
  privateAxios.get(APIs.USE_CREDITS, {
    params: {
      type: "AI_ART",
    },
  });

export const saveResultImageAi = (body: ImageUploadData) =>
  privateAxios.post(APIs.SAVE_IMAGE_AI, body);
