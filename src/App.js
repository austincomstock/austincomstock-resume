// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { About } from "./components/About";

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
      <header>
        <h1>Placeholder</h1>
      </header>

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
    </div>
  );
}

export default App;
