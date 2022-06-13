import React from "react";
import { ThePupSpa } from "./../../Pages/ThePupSpa/index";
import { TheTeaCozy } from "./../../Pages/TheTeaCozy/index";
import { Routes, Route, Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="subheading mb-3">Full Stack Projects</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <a
              // className="social-icon"
              href="https://task-flip-ten.vercel.app/signin"
              target="_blank"
              rel="noreferrer"
            >
              Task Flip React App
            </a>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Placeholder
          </li>
        </ul>
        <div className="subheading mb-3">Front End Projects</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {/* <ThePupSpa /> */}
            <Link to="/pages/thepupspa">The Pup Spa</Link>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {/* <TheTeaCozy /> */}
            <Link to="/pages/theteacozy">The Tea Cozy</Link>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Placeholder
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/pages/thepupspa" element={<ThePupSpa />} />
        <Route path="/pages/theteacozy" element={<TheTeaCozy />} />
      </Routes>
    </section>
  );
};
