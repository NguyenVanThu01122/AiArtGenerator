import axios from "axios";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../utils/constants";
import { privateAxios } from "./axios";
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

export const getListImage = () =>
  axios.get(
    "https://style-management-api.dev.apero.vn/v2/styles?limit=1000000&page=1&project=Creatorhub_WEB"
  );

export const generateAiImage = (imageData: FormData) =>
  axios.post(
    "https://api-img-gen-wrapper.apero.vn/api/v2/image-ai",
    imageData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "arraybuffer",
    }
  );

export const deductCreditsAiArt = async () => {
  try {
    await privateAxios.get("/user/use-credits", {
      params: {
        type: "AI_ART",
      },
    });
  } catch (error) {
    toast.error(ERROR_MESSAGES.SERVER_ERROR);
  }
};

export const saveResultImageAi = (body: ImageUploadData) =>
  privateAxios.post("/store/save-image", body);
