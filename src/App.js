import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Material from "./routes/Material";
import As from "./routes/As";
import AsDetail from "./routes/AsDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/material" element={<Material />} />
        <Route path="/as" element={<As />} />
        <Route path="/as/:id" element={<AsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
