import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export interface paramsType {
  page: number;
  limit: number;
  sortDate: string;
}
export const getListImageAi = (params: paramsType) =>
  privateAxios.get(APIs.STORE, {
    params,
  });

export const deleteImageAi = (listId: string) =>
  privateAxios.delete(APIs.STORE, {
    params: {
      idArr: listId,
    },
  });
