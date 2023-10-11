import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import AiArtGenerator from "./pages/AiArtGenerator";
import AiBackgroundChanger from "./pages/AiBackgroundChanger";
import { AiPhotoEnhancer } from "./pages/AiPhotoEnhancer";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import VerifyRegister from "./pages/VerifyRegister";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="ai-art-generator" element={<AiArtGenerator />} />
          <Route path="/ai-photo-enhancer" element={<AiPhotoEnhancer />} />
          <Route
            path="/ai-background-changer"
            element={<AiBackgroundChanger />}
          />
        </Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/verify-register" element={<VerifyRegister />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
