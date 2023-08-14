import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./script/scenes/home";
import Login from "./script/scenes/login";

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
