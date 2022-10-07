import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import "./App.css";
import Appoinment from "./pages/Appointment/Appoinment/Appointment";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="appointment" element={<Appoinment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
