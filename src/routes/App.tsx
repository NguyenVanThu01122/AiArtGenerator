import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import AiArtGenerator from "../pages/AiArtGenerator";
import AiBackgroundRemove from "../pages/AiBackgroundRemove";
import { AiPhotoEnhancer } from "../pages/AiPhotoEnhancer";
import ChangePassword from "../pages/ChangePassword";
import Home from "../pages/Home";

import AiImageResult from "../pages/AiImageResults";
import { HomePage } from "../pages/HomePage";
import { MyAccount } from "../pages/MyAccount";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register";
import { SignIn } from "../pages/SignIn";
import VerifyRegister from "../pages/VerifyRegister";
import { ROUTES } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.AI_IMAGE_RESULT} element={<AiImageResult />} />
          <Route path={ROUTES.AI_ART_GENERATOR} element={<AiArtGenerator />} />
          <Route
            path={ROUTES.AI_PHOTO_ENHANCER}
            element={<AiPhotoEnhancer />}
          />
          <Route path={ROUTES.PRICING} element={<Pricing />} />
          <Route
            path={ROUTES.AI_BACKGROUND_REMOVE}
            element={<AiBackgroundRemove />}
          />
          <Route path={ROUTES.MY_ACCOUNT} element={<MyAccount />} />
        </Route>
        <Route path={ROUTES.ERROR} element={<NotFound />} />
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />}></Route>
        <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePassword />} />
        <Route path={ROUTES.VERIFY_REGISTER} element={<VerifyRegister />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
