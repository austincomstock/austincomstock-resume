import "./App.css";
import { Experience } from "./components/Experience";
// import { useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  // useEffect(() => {
  /*!
   * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
   * Copyright 2013-2022 Start Bootstrap
   * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
   */
  //
  // Scripts
  //

  // Tony helped with this initially. But I commeneted out the code below becuase it's throwing an error 'bootstrap' is not defined  no-undef
  //   window.addEventListener("DOMContentLoaded", (event) => {
  //     // Activate Bootstrap scrollspy on the main nav element
  //     const sideNav = document.body.querySelector("#sideNav");
  //     if (sideNav) {
  //       new bootstrap.ScrollSpy(document.body, {
  //         target: "#sideNav",
  //         offset: 74,
  //       });
  //     }

  //     // Collapse responsive navbar when toggler is visible
  //     const navbarToggler = document.body.querySelector(".navbar-toggler");
  //     const responsiveNavItems = [].slice.call(
  //       document.querySelectorAll("#navbarResponsive .nav-link")
  //     );
  //     responsiveNavItems.map(function (responsiveNavItem) {
  //       responsiveNavItem.addEventListener("click", () => {
  //         if (window.getComputedStyle(navbarToggler).display !== "none") {
  //           navbarToggler.click();
  //         }
  //       });
  //     });
  //   });
  // });

  return (
    <div className="App">
      {/* Navigation */}
      <section>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Austin Comstock</span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/Images/austinprofilepic.jpg"
                alt="..."
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
                {/* <Link to="/">About</Link> */}
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      {/* About */}

      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Austin
            <span className="text-primary">Comstock</span>
          </h1>
          <div className="subheading mb-5">
            2063 W 12130 S · Riverton, UT 84065 · (801) 558-9783 ·
            <a href="mailto: austinjcomstock@gmail.com">
              austinjcomstock@gmail.com
            </a>
          </div>
          <p className="lead mb-5">
            I am experienced in Front End Web Development using HTML, CSS,
            JavaScript and React. I'm using Visual Studio Code, Github and
            Vercel for my projects.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/austincomstock/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/austincomstock"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/austin.comstock.18/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <Routes>
        <Route path="/" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
