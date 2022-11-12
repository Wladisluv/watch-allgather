import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './scss/app.scss'


function App() {
  return (
    <div className="app">
      <Header />
        <div className="content">
            <div className="content-left">
            <div className="content__descr">
              <p>
                Watch Allgather - проект который позволяет отслеживать новинки кино и сериалов, 
                а также добавлять их в список отслеживаемых, просмотренных или уже завершенных.
                </p>
                <br />
                <p>
                Изюминкой проекта является возможность создавать свою 
                комнату для совместного просмотра с друзьями!
                </p>
              </div>
              <div>
                <button className="content__btn">Войти</button>
              </div>
            </div>
              <div className="content__img">
            </div>
            </div>
        <Footer />
    </div>
  );
}

export default App;