import Image from "next/image";
import { FC } from "react";
import Header from "./header";
import First from "../assets/images/first.jpg";

const Portfolio: FC = () => {
  return (
    <>
      <Header homePage={false} />
      <div className="portfolio-wrapper">
        <div>
          <Image src={First} alt=""/>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Portfolio;
