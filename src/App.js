import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home";
import Rooms from "./components/Rooms";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms/" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
