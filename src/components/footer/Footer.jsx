import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#footer" className="footer__logo">
        Ng Wei Jian
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* END OF PERMALINKS */}
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/anonymousnick0101/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GrFacebook />
        </a>
        <a
          href="https://github.com/NickNWJ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nick-ng-1b8092187/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=601136693307&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsWhatsapp />
        </a>
      </div>
      {/* END OF SOCIALS */}
      <div className="footer__copyright">
        <small>&copy; Ng Wei Jian. All rights reserved.</small>
      </div>
      {/* END OF COPYRIGHT */}
    </footer>
  );
};

export default Footer;
