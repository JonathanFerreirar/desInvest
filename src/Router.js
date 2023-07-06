import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { App } from "./App";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
