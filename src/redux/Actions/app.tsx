const saveLogin = (payload: boolean) => {
  return {
    type: "SAVE_LOGIN",
    payload,
  };
};
const saveUser = (payload: any) => {
  return {
    type: "SAVE_USER",
    payload,
  };
};

const saveToken = (payload: string) => {
  return {
    type: "SAVE_TOKEN",
    payload,
  };
};
const saveCloseMenu = (payload: boolean) => {
  return {
    type: "SAVE_CLOSE_MENU",
    payload,
  };
};
export { saveCloseMenu, saveLogin, saveToken, saveUser };
