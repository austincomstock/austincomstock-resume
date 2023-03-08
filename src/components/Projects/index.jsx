import React from "react";
import cmgImg from "./CMG_1-min.JPG";
import articulateautoImg from "./ArticulateAuto_1-min.JPG";
import battistonelawncareImg from "./BattistoneLawnCare_1-min.JPG";
import taskflipImg from "./TaskFlip_1-min.JPG";
import supafacebrainImg from "./SupaFaceBrain_1-min.JPG";

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
            <p>
              Business site for Construction Management Group. Check out the
              Estimates page for a free estimate.
            </p>
            <img src={cmgImg} alt="CMG" className="projectsImg" />
          </li>
          <li>
            <a
              href="https://www.articulateauto.com/"
              target="_blank"
              rel="noreferrer"
            >
              Articulate Auto
            </a>
            <p>Business site for Articulate Auto.</p>
            <img
              src={articulateautoImg}
              alt="Articulate Auto"
              className="projectsImg"
            />
          </li>
          <li>
            <a
              href="https://www.battistonelawncare.com/"
              target="_blank"
              rel="noreferrer"
            >
              Battistone Lawn Care
            </a>
            <p>Business site for Battistone Lawn Care.</p>
            <img
              src={battistonelawncareImg}
              alt="Battistone Lawn Care"
              className="projectsImg"
            />
          </li>
        </ul>
        <hr></hr>
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
            <p>Login to this app to keep track of your personal tasks.</p>
            <img src={taskflipImg} alt="Task Flip" className="projectsImg" />
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <a
              href="https://supa-face-brain.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Supa Face Brain
            </a>
            <p>
              This app will detect faces in pictures. Login and enter a picture
              with a face to see it work.
            </p>
            <img
              src={supafacebrainImg}
              alt="Supa Face Brain"
              className="projectsImg"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
