import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Mail from "../../assets/images/mail.svg";
import Phone from "../../assets/images/3.jpg";
import Viber from "../../assets/images/viber.png";
import Router, { useRouter } from "next/router";

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

interface Props {
  homePage: boolean;
}
const Header: FC<Props> = ({ homePage }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes("services")) {
      setActive({ ...active, two: "active" });
    }
    if (router.pathname.includes("about")) {
      setActive({ ...active, three: "active" });
    }
    if (router.pathname.includes("portfolio")) {
      setActive({ ...active, four: "active" });
    }
    if (router.pathname.includes("contacts")) {
      setActive({ ...active, five: "active" });
    }
  }, []);
  const [active, setActive] = useState<ActiveState>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });

  const [show, setShow] = useState(false);

  const goToPage = (item: ActiveItem) => {
    if (show || window.innerWidth > 520) {
      if (item === "one") {
        Router.push("/");
      }
      if (item === "two") {
        Router.push("/services");
      }
      if (item === "three") {
        Router.push("/about");
      }
      if (item === "four") {
        Router.push("/portfolio");
      }
      if (item === "five") {
        Router.push("/contacts");
      }
    }
  };

  const switchMenu = () => {
    setShow(!show);
  };

  return (
    <div className={`header-wrapper ${homePage ? "" : "header-background"}`}>
      <div className="">
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
              href="mailto: oakhousekharkiv@gmail.com"
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
              oakhousekharkiv@gmail.com
            </a>
          </div>
        </div>
        {/* <div>
          <div className="social-section">
            <a href="viber://chat?number=80971867569">
              <Image width={40} height={40} src={Viber} alt="вайбер" />
              Viber
            </a>
          </div>
        </div> */}
        <div className="burger"></div>
      </div>
      <ul className="menu-section">
        <HeaderMenu active={active} goToPage={goToPage} />
      </ul>
      <div className="menu-section-mobile">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label
            className={`menu__btn ${
              homePage || active.two === "active" ? "" : "black"
            }`}
            htmlFor="menu__toggle"
            onClick={switchMenu}
          >
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
      {/* <li
        className={`${active.four} menu-section-item`}
        onClick={() => goToPage("four")}
      >
        <span>Портфолио</span>
      </li> */}
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
