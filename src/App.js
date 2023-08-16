import "./App.css";
import * as bootstrap from "bootstrap";
import { useEffect } from "react";

// Components
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { FreeQuote } from "./components/FreeQuote/FreeQuote";

// Google Analytics
// I followed the steps here - https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
import ReactGA from "react-ga";
// const TRACKING_ID = "UA-60116963-2"; // OUR_TRACKING_ID or MEASUREMENT ID based on V4
const MEASUREMENT_ID = "G-P02XHL3QKY"; // MEASUREMENT ID based on V4
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  // Start useEffect for Bootstrap
  useEffect(() => {
    //    * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
    //    * Copyright 2013-2022 Start Bootstrap
    //    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)

    window.addEventListener("DOMContentLoaded", (event) => {
      // Activate Bootstrap scrollspy on the main nav element
      const sideNav = document.body.querySelector("#sideNav");
      if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: "#sideNav",
          offset: 74,
        });
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        return responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
    });
  });
  // End useEffect for Bootstrap

  // Start useEffect for Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // End useEffect for Google Analytics

  return (
    <div>
      {/* Start Navigation */}
      <section>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="/#">
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
                <a className="nav-link js-scroll-trigger" href="#freequote">
                  Free Quote
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      {/* End Navigation */}
      <>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <FreeQuote />
      </>
    </div>
  );
}

export default App;
