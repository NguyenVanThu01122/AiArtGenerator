import { BrowserRouter, Route, Routes } from "react-router-dom";
import AiArtGenerator from "./pages/AiArtGenerator";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { SidebarImageLogin } from "./components/SidebarImageLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/sidebar-login" element={<SidebarImageLogin />} />
          <Route path="aiart-generator" element={<AiArtGenerator />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
