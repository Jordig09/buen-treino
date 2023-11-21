import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./script/scenes/home";
import Login from "./script/scenes/login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/buen-treino" element={<Login />} />
        <Route path="/buen-treino/home" element={<Home />} />
        <Route path="/buen-treino/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
