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
            <p>
              Business site for Construction Management Group. Check out the
              Estimates page for a free estimate.
            </p>
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
          </li>
          <li>
            <a
              href="https://robofriends-opal.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              RoboFriends
            </a>
            <p>Search for a robot with this robot generator.</p>
          </li>
          {/* <li>
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
          </li> */}
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
            <p>Login to this app to keep track of your personal tasks.</p>
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
              This app will detect faces in pictures using a Clarifai api. Login
              and enter a url picture with a face to see it work.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
