import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'swiper/swiper.min.css';

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

import Catalog from './components/Catalog';
import Detail from './pages/Detail';

import './scss/app.scss'


function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage  />} />
      <Route path='/login' element={<LoginPage  />} />
      <Route path='/register' element={<RegisterPage  />} />
      <Route path='/main' element={<MainPage  />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path='/:category/:filmId' element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
}

export default App;
