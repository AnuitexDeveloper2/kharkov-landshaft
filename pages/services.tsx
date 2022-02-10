import Link from "next/link";
import { FC } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Services: FC = () => {
  return (
    <div className="service-wrapper">
      <Header homePage={false} />
      <div className="service-section top">
        <div>
          <div className="title">Обрезка деревьев</div>
          <div className="description">
            Все наши работы по обрезке выполняются точно и тщательно в
            соответствии с европейскими стандартами{" "}
            <Link href="https://www.trees.org.uk/Help-Advice/Public/A-brief-guide-to-tree-work-terminology-and-definit">
              BS3998
            </Link>{" "}
            для работы с деревьями. Мы тщательно подходим к каждому разрезу и
            всегда заботимся о здоровье дерева в долгосрочной перспективе.
          </div>
        </div>
      </div>
      <div className="service-section middle">
        <div>
          <div className="title">Удаление деревьев</div>
          <div className="description">
            Мы понимаем, что иногда дерево необходимо удалить из-за болезни,
            соображений безопасности или неправильного местоположения, но часто
            существуют альтернативные решения для удаления взрослого дерева,
            такие как выборочная обрезка и уменьшение размера. Если мы удаляем
            дерево, мы всегда будем стремиться пересадить его подходящим видом.
          </div>
        </div>
      </div>
      <div className="service-section middle1">
        <div>
          <div className="title">Посадка</div>
          <div className="description">
            Мы стремимся заменить каждое срубленное дерево и решительно
            выступаем за посадку деревьев везде, где это возможно. Мы с радостью
            предоставим бесплатные консультации по подходящим видам и методам
            посадки!
          </div>
        </div>
      </div>
      <div className="service-section-down">
        <div>
          <div className="title">В двух словах:</div>
          <div className="description">
            <ul>
              <li>Выполняются все виды работ по дереву</li>
              <li>Нет слишком маленькой работы</li>
              <li>Выявленные вредителей, болезней и дефектов</li>
              <li>Высокопрофессиональный сервис</li>
              <li>Бесплатная консультация и совет</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
