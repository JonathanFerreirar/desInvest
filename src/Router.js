import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { App } from "./App";
import { Input } from "./components/input/Input";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
