import { privateAxios } from "./configs/axios";

export interface paramsType {
  page: number;
  limit: number;
  sortDate: string;
}
export const getListImageAi = (params: paramsType) =>
  privateAxios.get("/store", {
    params,
  });

export const deleteImageAi = (listId: string) =>
  privateAxios.delete("/store", {
    params: {
      idArr: listId,
    },
  });
