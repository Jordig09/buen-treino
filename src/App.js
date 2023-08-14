import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./script/Scenes/home";
import Login from "./script/Scenes/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
