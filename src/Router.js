import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { App } from './App';
import { Input } from './components/input/Input';
import { Button } from './components/button/Button';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/input" element={<Input />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
