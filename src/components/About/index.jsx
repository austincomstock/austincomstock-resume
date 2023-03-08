import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsEnvelope } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Austin
          <span className="text-primary">Comstock</span>
        </h1>
        {/* TypeAnimation Start */}
        <TypeAnimation
          sequence={[
            "I'm a web developer.", // Types content
            2500, // Waits 2.5s
            "I'm a software developer.", // Deletes previous content and types content
            2500, // Waits 2.5s
            // "I can help bring your website to life.", // Deletes previous content and types content
            // 3000,
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.8em" }}
          className="subheading mb-5"
        />
        {/* TypeAnimation End*/}
        <p className="lead mb-5">
          My name is Austin, I'm a Web Developer. I can help bring your website
          to life.
          <br></br>
          Interested in working together? Contact me via a social link or fill
          out the form below for a <a href="#freequote">free quote</a>.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="mailto: austinjcomstock@gmail.com"
            aria-label="email link"
            target="_blank"
            rel="noreferrer"
          >
            <BsEnvelope />
          </a>
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
