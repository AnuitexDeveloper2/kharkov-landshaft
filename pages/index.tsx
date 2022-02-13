import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

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
import { sentEmail } from "../helper/email";
const HomePage: FC = () => {
  const [activeItem, setactiveItem] = useState(0);
  const [text, setText] = useState(quotes[0]);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [error, setError] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeQuote = () => {
    const next = activeItem === 3 ? 1 : activeItem + 1;

    setactiveItem(next);
    setText(quotes[next]);
  };

  useEffect(() => {
    document.documentElement.lang = "en-us";
    const timeout = setTimeout(() => {
      changeQuote();
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [changeQuote]);

  const handleInputs = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const submitData = () => {
    if (!state.phone) {
      setError(true);
      return;
    }
    sentEmail(state.name, state.phone, state.email, state.comments);
    setSuccessSubmit(true);
  };

  return (
    <>
      <Head>
        <title>Обрезка деревьев</title>
        <meta name="keywords" content="деревья, Харьков, обрезка"></meta>
        <meta
          property="og:title"
          content="Обрезка деревьев в Харькове"
          key="title"
        />
        <meta name="description" content="Обрезка деревьев в Харькове"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="" />
      </Head>
      <Header homePage={true} />
      <div className="home-wrapper">
        <div className="home-up-section">
          <div className="form-section">
            <div className="home-title">
              <div className="home-main-icon-container">
                <Image className="home-main-icon" src={Oak} alt="" />
              </div>
              <h1>Экспертный уход за деревьями Харькова и области</h1>
            </div>
            {successSubmit ? (
              <div className="success-submit">
                Мы свяжимся с вами в ближйшее время
              </div>
            ) : (
              <div className="home-form">
                <div className="phone-section">
                  <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    onChange={handleInputs}
                  />
                  <div className="phone-input-section">
                    <input
                      type="text"
                      placeholder="Телефон"
                      name="phone"
                      onChange={handleInputs}
                      className={`${
                        !state.phone && error ? "error-input" : ""
                      }`}
                    />
                    {!state.phone && error && (
                      <span className="error">Введите телефон</span>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Начните разговор сейчас"
                    name="comments"
                    onChange={handleInputs}
                  />
                </div>
                <div className="home-form-buttons">
                  <div>
                    <button onClick={submitData}>Отправить</button>
                  </div>
                  {/* <div>
                  <button>Наши проекты</button>
                </div> */}
                </div>
              </div>
            )}
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
          установленных нас совершенно другой подход к работе с деревьями, чем у большинства
          наших конкурентов. Мы верим в сохранение окружающей среды и всегда
          будем ставить долгосрочное здоровье наших взрослых деревьев в качестве
          главного приоритета. Наша работа основана на обширных знаниях
          установленных стандартов лесоводства и более чем пятилетнем
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
      <Footer />
    </>
  );
};

export default HomePage;
