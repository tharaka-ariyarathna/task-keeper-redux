import Home from "./pages/home";
import Add from "./pages/add";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="tasks/home" />} />
      <Route path="/tasks" element={<Navigate to="/tasks/home" />} />
      <Route path="tasks/home" element={<Home />} />
      <Route path="tasks/add" element={<Add />} />
    </Routes>
  );
};

export default App;
