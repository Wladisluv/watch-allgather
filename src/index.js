import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import './api/firebaseApi';
import 'swiper/swiper.min.css';
import './scss/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
);