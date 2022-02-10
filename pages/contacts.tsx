import { FC } from "react";
import Header from "../components/header";
const Contacts: FC = () => {
  return (
    <>
      <Header homePage={false} />
      <div className="contacts-wrapper">
        <div className="contact-container">
          <h1 className="title">Свяжитесь с нами</h1>
          <div className="description">
            На все запросы будет дан ответ, наши рекомендации бесплатны и ни к
            чему не обязывают.
          </div>
          <div className="information">
            <div className="information-inner">
              <div className="title">телефон:</div>
              <div className="description">
                {" "}
                <a href="tel:+380971867569">096 2530 374</a>
              </div>
              <div className="title">email:</div>
              <div className="description">
                <a
                  className="phone-section"
                  href="mailto: morgenshtern1988@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  insertemailhere@xyz.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-container-item">
            <span>Имя</span>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="form-container-item">
            <span>Email</span>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="form-container-item">
            <span>Телефон</span>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="form-container-item">
            <span>Адрес выполнения работы</span>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="form-container-item">
            <span>Небольшое описание работы</span>
            <div>
              <textarea />
            </div>
          </div>
          <div className="form-button">
            <button className="contact-form-buttons">Отправить</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Contacts;
