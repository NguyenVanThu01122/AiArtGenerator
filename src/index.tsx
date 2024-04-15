import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./i18n/i18n";
import "./index.css";
import store from "./reduxToolkit/Store";
import App from "./routes/App";
import { theme } from "./theme";
const root = ReactDOM.createRoot(
  
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <App   />
      <ToastContainer />
    </CssVarsProvider>
  </Provider>
);
