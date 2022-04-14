import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
import "./header.css";
const header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ng Wei Jian</h1>
        <h5 className="text-light">
          Second Year Computer Science Student, specialized in Software
          Engineering
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
