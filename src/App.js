import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'swiper/swiper.min.css';

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

import Catalog from './components/Catalog';
import Detail from './pages/Detail';
import Collection from "./pages/CollectionPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage  />} />
      <Route path='/welcome' element={<WelcomePage  />} />
      <Route path='/login' element={<LoginPage  />} />
      <Route path='/register' element={<RegisterPage  />} />
      <Route path="/profile/collection" element={<Collection />} />
      <Route path='/:category/:filmId' element={<Detail />} />
      <Route path='/:category/:kinopoiskId' element={<Detail />} />
      <Route path="/catalog/:category/top250" element={<Catalog />} />
      <Route path="/catalog/:category" element={<Catalog />} />
      <Route path="/catalog/:category/best-series" element={<Catalog />} />
      <Route path="/catalog/:category/best-anime" element={<Catalog />} />
    </Routes>
  );
}

export default App;
