import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import "./index.css";
import { rootReducer } from "./redux/Reducers";
import store from "./reduxToolkit/Store";
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
