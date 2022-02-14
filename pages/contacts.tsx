import { FC, useState } from "react";
import Header from "../components/header";
import { sentEmail } from "../helper/email";
const Contacts: FC = () => {
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
    location: "",
  });

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
    sentEmail(
      state.name,
      state.phone,
      state.email,
      state.comments,
      state.location
    );
    setSuccessSubmit(true);
  };

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
                  href="mailto: oakhousekharkiv@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  oakhousekharkiv@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {successSubmit ? (
          <div className="success-submit">
            Мы свяжимся с вами в ближйшее время
          </div>
        ) : (
          <div className="form-container">
            <div className="form-container-item">
              <span>Имя</span>
              <div>
                <input type="text" name="name" onChange={handleInputs} />
              </div>
            </div>
            <div className="form-container-item">
              <span>Email</span>
              <div>
                <input type="text" name="email" onChange={handleInputs} />
              </div>
            </div>
            <div className="form-container-item">
              <span>Телефон</span>
              <div>
                <input type="text" name="phone" onChange={handleInputs} />
                {!state.phone && error && (
                  <span className="error">Введите телефон</span>
                )}
              </div>
            </div>
            <div className="form-container-item">
              <span>Адрес выполнения работы</span>
              <div>
                <input type="text" name="location" onChange={handleInputs} />
              </div>
            </div>
            <div className="form-container-item">
              <span>Небольшое описание работы</span>
              <div>
                <textarea name="comments" onChange={handleInputs} />
              </div>
            </div>
            <div className="form-button">
              <button className="contact-form-buttons" onClick={submitData}>
                Отправить
              </button>
            </div>
          </div>
        )}
        <div></div>
      </div>
    </>
  );
};

export default Contacts;
