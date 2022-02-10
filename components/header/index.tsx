import { FC, useEffect, useState } from "react";
import Image from 'next/image';
import Mail from "../../assets/images/mail.svg";
import Phone from "../../assets/images/3.jpg";

interface ActiveState {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

type ActiveItem = "one" | "two" | "three" | "four" | "five";

interface MenuProps {
  active: ActiveState;
  goToPage: (item: ActiveItem) => void;
}

const Header: FC = () => {

  useEffect(()=> {

  })
  const [active, setActive] = useState<ActiveState>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });

  const [show, setShow] = useState(false);

  const goToPage = (item: ActiveItem) => {
    let fakeState = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
    };
    fakeState[item] = "active";
    setActive(fakeState);
    if (item === "one") {
      window.location.href= '/'
    }
    if (item === "two") {
      window.location.href = '/services'
    }
  };  

  const switchMenu = () => {
    setShow(!show);
  };

  return (
    <div className="header-wrapper">
      <div className="information-section">
        <a href="tel:+380971867569" className="phone-section">
          <Image
            src={Phone}
            className="header-icon"
            alt="phone"
            width={45}
            height={45}
          />
          096 2530 374
        </a>
        <div>
          <a
            className="phone-section"
            href="mailto: morgenshtern1988@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={Mail}
              className="header-icon mr-10"
              alt="phone"
              width={30}
              height={45}
            />
            insertemailhere@xyz.com
          </a>
        </div>
        <div className="burger"></div>
      </div>
      <ul className="menu-section">
        <HeaderMenu active={active} goToPage={goToPage} />
      </ul>
      <div className="menu-section-mobile">
        <div className="hamburger-menu" >
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle" onClick={switchMenu}>
            <span></span>
          </label>
        </div>
        <ul className={`menu-section-mobile-main ${show ? "showMenu" : ""}`}>
          <HeaderMenu active={active} goToPage={goToPage} />
        </ul>
      </div>
    </div>
  );
};

const HeaderMenu: FC<MenuProps> = ({ active, goToPage }) => {
  return (
    <>
      <li
        className={`${active.one} menu-section-item`}
        value={"one"}
        onClick={() => goToPage("one")}
      >
        <span>Главная</span>
      </li>
      <li
        className={`${active.two} menu-section-item`}
        value={"two"}
        onClick={() => goToPage("two")}
      >
        <span>Услуги</span>
      </li>
      <li
        className={`${active.three} menu-section-item`}
        onClick={() => goToPage("three")}
      >
        <span>Почему мы</span>
      </li>
      <li
        className={`${active.four} menu-section-item`}
        onClick={() => goToPage("four")}
      >
        <span>Портфолио</span>
      </li>
      <li
        className={`${active.five} menu-section-item`}
        onClick={() => goToPage("five")}
      >
        <span>Контакты</span>
      </li>
    </>
  );
};

export default Header;
