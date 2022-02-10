import { FC, useEffect, useState } from "react";
import Image from "next/image";

import Line from "../assets/images/line.svg";
import Star from "../assets/images/star.svg";
import Quote from "../assets/images/quote.svg";
import Shield from "../assets/images/shield.svg";
import Handshake from "../assets/images/handshake.svg";
import Qualification from "../assets/images/qualification.svg";
import Oak from "../assets/images/oakhouse.svg";
import { quotes } from "../helper/quotes";
import Header from "../components/header";
import Footer from "../components/footer";
const HomePage: FC = () => {
  const [activeItem, setactiveItem] = useState(0);
  const [text, setText] = useState(quotes[0]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeQuote = () => {
    const next = activeItem === 3 ? 1 : activeItem + 1;
    console.log(activeItem);

    setactiveItem(next);
    setText(quotes[next]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeQuote();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [changeQuote]);

  return (
    <>
      <Header homePage={true}/>
      <div className="home-wrapper">
        <div className="home-up-section">
          <div className="form-section">
            <div className="home-title">
              <div className="home-main-icon-container">
                <Image className="home-main-icon" src={Oak} alt="" />
              </div>
              <p>Экспертный уход за деревьями Харькова и области</p>
            </div>
            <div className="home-form">
              <div className="phone-section">
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Телефон" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <textarea placeholder="Начните разговор сейчас" />
              </div>
              <div className="home-form-buttons">
                <div>
                  <button>Отправить</button>
                </div>
                {/* <div>
                  <button>Наши проекты</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="line-img">
            <Image src={Line} alt="line" />
          </div>
          <div className="benefits">
            <div className="benefits-item">
              <div>
                <Image src={Star} alt="img" />
              </div>
              <div className="benefits-text">
                Высочайшие стандарты лесоводства
              </div>
            </div>
            <div className="benefits-item">
              <div>
                <Image src={Qualification} alt="img" />
              </div>
              <div className="benefits-text">Высокая квалификация</div>
            </div>
            <div className="benefits-item">
              <div>
                <Image src={Handshake} alt="img" />
              </div>
              <div className="benefits-text">Дружелюбный и надежный сервис</div>
            </div>
            <div className="benefits-item">
              <div>
                <Image src={Shield} alt="img" />
              </div>
              <div className="benefits-text">Надежнасть и гарантия</div>
            </div>
            <div className="benefits-item">
              <div>
                <Image src={Quote} alt="img" />
              </div>
              <div className="benefits-text">Бесплатная консультация</div>
            </div>
          </div>
        </div>
        <div className="home-middle-section">
          В Oakhouse у нас совершенно другой подход к работе с деревьями, чем у
          большинства наших конкурентов. Мы верим в сохранение окружающей среды
          и всегда будем ставить долгосрочное здоровье наших взрослых деревьев в
          качестве главного приоритета. Наша работа основана на обширных знаниях
          установленных стандартов лесоводства и более чем пятнадцатилетнем
          практическом опыте. Мы ориентированы на решения, поэтому всегда будем
          работать с нашими клиентами, чтобы попытаться удовлетворить их
          потребности в соответствии с духом нашей компании.
        </div>
        <div className="home-down-section">
          <div>
            <div className="home-down-section-title">
              {" "}
              Что люди говорят о нас
            </div>
            <div className="about-us">{text.text}</div>
            <div className="about-us-author">{text.author}</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
