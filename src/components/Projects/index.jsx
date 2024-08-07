import React from "react";
import cmgImg from "./CMG_1-min.JPG";
// import articulateautoImg from "./ArticulateAuto_1-min.JPG";
import battistonelawncareImg from "./BattistoneLawnCare_1-min.JPG";
import robofriendsImg from "./RoboFriends-min.JPG";
import taskflipImg from "./TaskFlip_1-min.JPG";
import supafacebrainImg from "./SupaFaceBrain_1-min.JPG";
import githubImg from "./Github_1-min.JPG";
import tortoisehareImg from "./Tortoise&HareRC_1-min.JPG";
import weatherappImg from "./WeatherApp_1-min.JPG";
import newslettersignupImg from "./NewsLetterSignup_1-min.JPG";

export const Projects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <hr></hr>
        <h2 className="mb-5">Projects</h2>
        <div className="subheading mb-3 mt-3">
          Click the image to visit the site.
        </div>
        <div className="projectsContainer">
          <a href="https://c-m-g.vercel.app/" target="_blank" rel="noreferrer">
            <img src={cmgImg} alt="CMG" className="projectsImg" />
          </a>

          {/* <a
            href="https://www.articulateauto.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={articulateautoImg}
              alt="Articulate Auto"
              className="projectsImg"
            />
          </a> */}

          <a
            href="https://www.battistonelawncare.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={battistonelawncareImg}
              alt="Battistone Lawn Care"
              className="projectsImg"
            />
          </a>

          <a
            href="https://robofriends-opal.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={robofriendsImg}
              alt="Robo Friends"
              className="projectsImg"
            />
          </a>

          <a
            href="https://supa-face-brain.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={supafacebrainImg}
              alt="Supa Face Brain"
              className="projectsImg"
            />
          </a>
          <a
            href="https://task-flip-ten.vercel.app/signin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={taskflipImg} alt="Task Flip" className="projectsImg" />
          </a>
          <a
            href="https://austincomstock.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tortoisehareImg}
              alt="Tortoise & Hare RC"
              className="projectsImg"
            />
          </a>
          <a
            href="https://newsletter-signup-58me.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={newslettersignupImg}
              alt="News Letter Signup"
              className="projectsImg"
            />
          </a>
          <a
            href="https://weather-app-xp7z.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={weatherappImg}
              alt="Weather App"
              className="projectsImg"
            />
          </a>
          <a
            href="https://github.com/austincomstock"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImg} alt="Github" className="projectsImg" />
          </a>
        </div>
      </div>
    </section>
  );
};
