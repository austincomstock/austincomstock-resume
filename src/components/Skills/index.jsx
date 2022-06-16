import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        {/* Programming Languages & Tools */}
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            {/* <i className="fab fa-html5"></i> */}
            <FaHtml5 />
          </li>
          <li className="list-inline-item">
            {/* <i className="fab fa-css3-alt"></i> */}
            <FaCss3Alt />
          </li>
          <li className="list-inline-item">
            {/* <i className="fab fa-js-square"></i> */}
            <IoLogoJavascript />
          </li>
          <li className="list-inline-item">
            {/* <i className="fab fa-react"></i> */}
            <FaReact />
          </li>
          <li className="list-inline-item">
            {/* <i className="fab fa-node-js"></i> */}
            <FaNodeJs />
          </li>
          <li className="list-inline-item">
            <FaNpm />
          </li>
        </ul>
        {/* Workflow */}
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
        </ul>
        {/* Awards & Certifications */}
        {/* <div className="subheading mb-3">Awards & Certifications</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Udemy
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Codecademy
          </li>
        </ul> */}

        <br></br>

        {/* Education */}
        <div className="subheading mb-3">Education</div>
        <div>
          <ul className="fa-ul mb-0">
            <li>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <p className="mb-0">Salt Lake Community College</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2008 - 2010</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <p className="mb-0">Alta High School</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2006 - 2008</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
