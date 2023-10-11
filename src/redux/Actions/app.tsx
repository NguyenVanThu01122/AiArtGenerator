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
export { saveToken, saveUser,saveLogin };
