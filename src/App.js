import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./script/scenes/home";
import Login from "./script/scenes/login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
