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
            <a
              // className="social-icon"
              href="https://facerecognitionbrain1.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Face Recognition Brain
            </a>
          </li>
        </ul>
        <div className="subheading mb-3">Front End Projects</div>
        <ul className="fa-ul mb-0">
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
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            FriendBook
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Background Generator
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Startup
          </li>
        </ul>
      </div>

      {/* <Routes>
        <Route path="/pages/thepupspa" element={<ThePupSpa />} />
        <Route path="/pages/theteacozy" element={<TheTeaCozy />} />
      </Routes> */}
    </section>
  );
};
