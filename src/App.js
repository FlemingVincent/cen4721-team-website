import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProjectOne" element={<ProjectOne />} />
        <Route path="ProjectTwo" element={<ProjectTwo />} />
        <Route path="ProjectThree" element={<ProjectThree />} />
      </Routes>
    </Router>
  );
}

export default App;
