import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer-wrapper">
      <div>
        Позвоните нам сейчас для бесплатной консультации:{" "}
        <a href="tel:+380971867569" className="phone-footer-section">
          096 2530 374
        </a>
        <a href="https://t.me/XapbkoB1988">Telega Chat</a>
        <a href="viber://chat?number=80971867569">Viber</a>
      </div>
      <div>
        <button><Link href="/contacts"> Свяжитесь с нами </Link></button>
      </div>
    </div>
  );
};

export default Footer;
