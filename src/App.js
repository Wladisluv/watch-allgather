import React from "react";
import { Routes, Route } from 'react-router-dom';

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

import './scss/app.scss'


function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage  />} />
      <Route path='/login' element={<LoginPage  />} />
      <Route path='/register' element={<RegisterPage  />} />
      <Route path='/main' element={<MainPage  />} />
    </Routes>
  );
}

export default App;