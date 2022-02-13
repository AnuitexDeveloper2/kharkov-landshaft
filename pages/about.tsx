import Image from "next/image";
import { FC } from "react";
import Header from "../components/header";
import Mica from "../assets/images/micah.jpg";
import Certificate from "../assets/images/certificate.jpg";

const About: FC = () => {
  return (
    <>
      <Header homePage={false} />
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-top-section">
            <div className="mica-container">
              <Image src={Mica} alt="Sergey" />
            </div>
            <div>
              <h1>О нас</h1>
              <div className="description">
                Сергей Балаклейский (директор компании) имеет более чем 5-летний
                опыт работы с момента получения национального диплома в области
                лесного хозяйства и лесоводства. Он работает над рядом крупных
                проектов с различными компаниями и является очень опытным и
                квалифицированным лесоводом. Его глубокие знания подкреплены
                страстью к окружающей среде и большим интересом к академическому
                обучению (недавно он получил степень магистра в Харьковском
                сельскохозяйственном институте).
              </div>
            </div>
          </div>
          <div className="about-top-section">
            <div>
              <h1>Квалификация</h1>
              <div className="description">
                Мы требуем от своих сотрудников самых высоких стандартов,
                поэтому все сотрудники на месте полностью квалифицированы для
                своей роли. Поскольку здоровье и безопасность являются важным
                аспектом работы с деревьями, мы все квалифицированы в области
                безопасного использования бензопилы, спасательных работ с
                воздуха и оказания первой помощи.
              </div>
            </div>
            <div className="mica-container">
              <Image src={Certificate} alt="Sergey" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
