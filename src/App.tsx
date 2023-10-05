import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarImageLogin } from "./components/SidebarImageLogin";
import AiArtGenerator from "./pages/AiArtGenerator";
import { AiPhotoEnhancer } from "./pages/AiPhotoEnhancer";
import { Layout } from "./pages/Layout";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import AiBackgroundChanger from "./pages/AiBackgroundChanger";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/sidebar-login" element={<SidebarImageLogin />} />
          <Route path="ai-art-generator" element={<AiArtGenerator />} />
          <Route path="/ai-photo-enhancer" element={<AiPhotoEnhancer />} />
          <Route path="/ai-background-changer" element={<AiBackgroundChanger />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
