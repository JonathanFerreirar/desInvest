import { Route, BrowserRouter, Routes } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./laddingpage/main/Main";
import { Navbar } from "./laddingpage/navbar/Navbar";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/section-main" element={<Main />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
