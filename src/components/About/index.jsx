import React from "react";
import "./About.css";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

export const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Austin
          <span className="text-primary">Comstock</span>
        </h1>
        <div className="subheading mb-5">
          2063 W 12130 S · Riverton, UT 84065 · (801) 558-9783 ·
          <a href="mailto: austinjcomstock@gmail.com">
            austinjcomstock@gmail.com
          </a>
        </div>
        <p className="lead mb-5">
          {/* Experienced in Front End Web Development using HTML, CSS and
          JavaScript. I use Visual Studio Code, Github and Vercel for my
          projects. I'm currently learning ReactJS as well as backend
          developement. */}
          Utah based Web Developer experienced in Front End Web Development. I
          use Visual Studio Code, Github and Vercel for my projects. I'm
          currently learning React.js as well as Backend Development i.e.
          servers and databases.
          {/* <ul className="nobulletli">
            <li>Front End Web Development: HTML, CSS, JavaScript, React.js</li>
            <li>Tools: Visual Studio Code, Github, Vercel</li>
            <li>
              Learning In Progress: Backend Development, Servers, Databases i.e.
              PostgreSQL
            </li>
          </ul> */}
        </p>
        <p className="lead mb-5">Github/Social Links:</p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/austincomstock/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="social-icon"
            href="https://github.com/austincomstock"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/austin.comstock.18/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i className="fab fa-facebook-f"></i> */}
            <BsFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};
