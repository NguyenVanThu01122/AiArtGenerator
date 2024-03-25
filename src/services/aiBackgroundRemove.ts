import axios from "axios";
import { privateAxios } from "./configs/axios";

export const removeBackground = (formData: FormData) =>
  axios.post(
    "https://bgrm-enhance-wrapper.apero.vn/api/v1/bg-remove",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "arraybuffer",
    }
  );

// trừ credit khi sử dụng AI Art
export const deductCreditsRemoveBackground = () =>
  privateAxios.get("/user/use-credits", {
    params: {
      type: "REMOVE_BACKGROUND",
    },
  });
