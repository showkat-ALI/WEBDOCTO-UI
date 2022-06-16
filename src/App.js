import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import "./App.css";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
