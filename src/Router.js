import { Route, BrowserRouter, Routes } from "react-router-dom";

import { App } from "./App";
import { Login } from "./desinvest/pages/Login";
import { Home } from "./desinvest/pages/Home";
import { HomeLaddingPage } from "./laddingpage/pages/home/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home-laddinpage" element={<HomeLaddingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
