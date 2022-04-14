import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Java</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>C++</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>C#</h5>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>CSS</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>BootStrap</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h5>React</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>NodeJS</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Python</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>MySQL (RDBMS)</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>MongoDB</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Express.js</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Google Auth API</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        <div className="experience__backend">
          <h3>Other Related Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Git Basic CLI</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Firebase CLI</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>SDLC Methodology</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h5>Agile Methodology</h5>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF OTHER */}
      </div>
    </section>
  );
};

export default Experience;
