import React from "react";

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
            Task Flip React App
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
            The Pup Spa
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            The Tea Cozy
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Placeholder
          </li>
        </ul>
      </div>
    </section>
  );
};
