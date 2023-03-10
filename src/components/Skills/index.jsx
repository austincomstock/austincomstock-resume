import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <hr></hr>
        <h2 className="mb-5">Skills</h2>
        {/* Programming*/}
        <div className="subheading mb-3">Programming</div>
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
          <li>Back End Development: NodeJS, ExpressJS, PostgreSQL</li>
        </ul>
        <br></br>
        {/* Design & Tools */}
        <div className="subheading mb-3">Design & Tools</div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <p>
                <span className="fw-bold">Adobe Express</span> -{" "}
                <span className="fst-italic">Media Creation</span>
              </p>
              <p>
                <span className="fw-bold">Google Analytics</span> -{" "}
                <span className="fst-italic">Website Visitor Tracking</span>
              </p>
              <p>
                <span className="fw-bold">Hootsuite</span> -{" "}
                <span className="fst-italic">Social Media Scheduling</span>
              </p>
              <p>
                <span className="fw-bold">Atlassian</span> -{" "}
                <span className="fst-italic">Project & Task Management</span>
              </p>
            </div>
            <div class="col">
              <p>
                <span className="fw-bold">Visual Studio Code</span> -{" "}
                <span className="fst-italic">Code Editor</span>
              </p>
              <p>
                <span className="fw-bold">Github</span> -{" "}
                <span className="fst-italic">
                  Code Hosting & Version Control
                </span>
              </p>
              <p>
                <span className="fw-bold">Vercel</span> -{" "}
                <span className="fst-italic">Website & Services Hosting</span>
              </p>
              <p>
                <span className="fw-bold">Bootstrap</span> -{" "}
                <span className="fst-italic">CSS Framework</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
