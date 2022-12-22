import React from "react";

export const Projects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="subheading mb-3 mt-3">Front-End Projects</div>
        <ul className="fa-ul mb-0">
          <li>
            <a
              href="https://c-m-g.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              C-M-G
            </a>
          </li>
          <li>
            <a
              href="https://www.articulateauto.com/"
              target="_blank"
              rel="noreferrer"
            >
              Articulate Auto
            </a>
          </li>
          <li>
            <a
              href="https://www.battistonelawncare.com/"
              target="_blank"
              rel="noreferrer"
            >
              Battistone Lawn Care
            </a>
          </li>
          <li>
            <a
              href="https://robofriends-opal.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              RoboFriends
            </a>
          </li>
          <li>
            <a
              href="https://food-app-austincomstock.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              AwesomeEats
            </a>
          </li>
          <li>
            <a
              href="https://startup-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Startup
            </a>
          </li>
        </ul>
        <div className="subheading mb-3 mt-3">Full-Stack Projects</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <a
              href="https://task-flip-ten.vercel.app/signin"
              target="_blank"
              rel="noreferrer"
            >
              Task Flip
            </a>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <a
              href="https://facerecognitionbrain1.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Face Recognition Brain
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
