import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nick-ng-1b8092187/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/NickNWJ"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+601136693307"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
