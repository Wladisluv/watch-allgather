import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import './scss/app.scss'


function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="wrapper">
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
                <button className="content__btn" onClick={() => setModalActive(true)}>Войти</button>
              </div>
            </div>
            <div className="content__round"></div>
              <div className="content__img"></div>
            </div>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;