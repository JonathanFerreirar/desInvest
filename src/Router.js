import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
