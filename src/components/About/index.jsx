import React from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Austin
          <span className="text-primary">Comstock</span>
        </h1>
        <div className="subheading mb-5">
          <a href="mailto: austinjcomstock@gmail.com">
            austinjcomstock@gmail.com
          </a>
        </div>
        <p className="lead mb-5">
          My name is Austin, I'm a Web Developer. I can help you bring your
          website to life. Interested in working together? You can email me,
          contact me via a social link or fill out the form below for a free
          quote.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/austincomstock/"
            aria-label="linkedin link"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="social-icon"
            href="https://github.com/austincomstock"
            aria-label="github link"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/austin.comstock.18/"
            aria-label="facebook link"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            className="social-icon"
            href="https://www.instagram.com/austincomstock/"
            aria-label="instagram link"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};
