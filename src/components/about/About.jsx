import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Academic Achievement</h5>
              <small>
                <br />
                <ul>
                  ⭐ Degree in Computer Science in Multimedia University
                  Cyberjaya
                  <li> 🌗 CGPA 3.09</li>
                </ul>
                <br />
                <ul>
                  ⭐ Diploma in Information Technology in Multimedia University
                  Malacca
                  <li> 🌗 CGPA 3.5</li>
                </ul>
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Side Project</h5>
              <br />
              <small>4</small>
            </article>
          </div>

          <p id="justify">
            Hi! I'm a second year degree student in Computer Science Majoring in
            Software Engineering, at Multimedia University Cyberjaya. I'm
            interested in <i>Web Development</i> and
            <i> App Development</i> but not limited to Software Engineering
            field. During the semester break, I learnt how to develop a React
            website in NodeJS using Visual Studio Code to enhance my knowledge
            on <i>Web Development</i>
          </p>
        </div>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
