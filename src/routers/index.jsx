import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import PrivateRoute from "./private-route";
import LoginPage from "../Components/pages/login-page";
import Profil from "../Components/pages/profil/Profil";
import MyProfil from "../Components/pages/profil/MyProfil";
import MyMessage from "../Components/pages/message/MyMessage";
import MyGallery from "../Components/pages/settings/Gallery/MyGallery";
import MySkills from "../Components/pages/settings/mySkill/MySkills";
import EditSkill from "../Components/pages/settings/mySkill/EditSkill";
import EditGallery from "../Components/pages/settings/Gallery/EditGallery";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Profil />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profil" element={<MyProfil />} />
          <Route path="/message" element={<MyMessage />} />
          <Route path="/gallery" element={<MyGallery />} />
          <Route path="/gallery/edit/:ids" element={<EditGallery />} />
          <Route path="/myskill" element={<MySkills />} />
          <Route path="/myskill/edit/:ids" element={<EditSkill />} />
        </Route>
      </Route>
    </Routes>
  );
}
