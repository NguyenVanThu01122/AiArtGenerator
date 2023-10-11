interface State {
  user: any;
  token: string;
  login: boolean;
}

const initalState: State = {
  user: null,
  token: localStorage.getItem("token") || "",
  login: localStorage.getItem("token") ? true : false,
};

export const handleReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SAVE_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};
