import "./App.css";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import bootstrap from "bootstrap";

function App() {
  useEffect(() => {
    //   /*!
    //    * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
    //    * Copyright 2013-2022 Start Bootstrap
    //    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    //    */
    //   //
    //   // Scripts
    //   //

    //   // Tony helped with this initially. But I commeneted out the code below becuase it's throwing an error 'bootstrap' is not defined  no-undef
    window.addEventListener("DOMContentLoaded", (event) => {
      // Activate Bootstrap scrollspy on the main nav element
      // const sideNav = document.body.querySelector("#sideNav");
      // if (sideNav) {
      //   new bootstrap.ScrollSpy(document.body, {
      //     target: "#sideNav",
      //     offset: 74,
      //   });
      // }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
    });
  });

  return (
    <div>
      {/* Navigation */}
      <section>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Austin Comstock</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/Images/austinprofilepic.jpg"
                alt="..."
              />
            </span>
          </a>
          {/* Nav Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
      </>
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
      </Routes> */}
    </div>
  );
}

export default App;
