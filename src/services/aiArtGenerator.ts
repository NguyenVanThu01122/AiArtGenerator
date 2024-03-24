import axios from "axios";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../utils/constants";
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

export const getListImage = () => axios.get(APIs.GET_STYLES);

export const generateAiImage = (imageData: FormData) =>
  axios.post(APIs.CREATE_IMAGE_AI, imageData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "arraybuffer",
  });

// trừ credit khi sử dụng AI Art
export const deductCreditsAiArt = async () => {
  try {
    await privateAxios.get(APIs.USE_CREDITS, {
      params: {
        type: "AI_ART",
      },
    });
  } catch (error) {
    toast.error(ERROR_MESSAGES.SERVER_ERROR);
  }
};

export const saveResultImageAi = (body: ImageUploadData) =>
  privateAxios.post(APIs.SAVE_IMAGE_AI, body);
