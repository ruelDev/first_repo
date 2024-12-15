import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbars from "./pages/Navbars";
import Heroes from "./pages/Heroes";
import Abouts from "./pages/Abouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/xcythe"}/>} />
      <Route path="/xcythe" element={<Navbars />} />
      <Route path="/xcythe/heroes" element={<Heroes />} />
      <Route path="/xcythe/abouts" element={<Abouts />} />
    </Routes>
  );
};

export default App;
