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
            <FaHtml5 /> HTML
          </li>
          <li className="list-inline-item">
            <FaCss3Alt /> CSS
          </li>
          <li className="list-inline-item">
            <IoLogoJavascript /> JavaScript
          </li>
          <li className="list-inline-item">
            <FaReact /> React.js
          </li>
          <li className="list-inline-item">
            <FaNodeJs /> Node.js
          </li>
          <li className="list-inline-item">
            <FaNpm /> NPM
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
          <li>Front End Development: HTML, CSS, JavaScript, ReactJS</li>
          <li>Back End Development: NodeJS, ExpressJS, PostgreSQL, Vercel</li>
          <li>Tools: Visual Studio Code, Github</li>
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
