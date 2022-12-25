import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./components/Utils/Container";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default AppRoutes;
