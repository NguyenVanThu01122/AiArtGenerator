import { getTokenLocalStorage } from "./handleTokenUtils";

export const checkLogin = () => {
  const token = getTokenLocalStorage();
  if (token) {
    return true;
  } else {
    return false;
  }
};
