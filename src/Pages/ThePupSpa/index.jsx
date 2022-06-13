import React from "react";
import "./style.css";

export const ThePupSpa = (props) => {
  const title = props.title ?? "";

  return (
    // <body>
    <section>
      <div className="grid">
        <div className="thepupspa">
          <h2>{title}</h2>
          <h2>The Pup Spa</h2>
        </div>

        <header>
          <p className="title">PupSpa</p>
        </header>

        <div className="banner">
          <div className="bannercontents">
            <p>The #1 Dog Spa in NYC!</p>
            <img
              src="https://content.codecademy.com/courses/learn-css-grid/project-i/images/dog.svg"
              alt="doggo"
              className="dog"
            ></img>
          </div>
        </div>
        <div className="about">
          <p className="text">
            We are a full service grooming salon and doggy daycare. PupSpace is
            founded on the principles of communication and specialized care. We
            welcome you to your dog's new second home.
          </p>
        </div>

        <div className="box address">
          <img
            src="https://content.codecademy.com/courses/learn-css-grid/project-i/images/marker.svg"
            alt="marker"
            className="icon"
          ></img>
          <p>ADDRESS:233 Lewis Avenue Brooklyn, NY 11233</p>
        </div>

        <div className="box hours">
          <img
            src="https://content.codecademy.com/courses/learn-css-grid/project-i/images/clock.svg"
            alt="clock"
            className="icon"
          ></img>
          <p>HOURS:Mon-Fri 8:00AM-9:00PM</p>
        </div>

        <div className="box call-us">
          <img
            src="https://content.codecademy.com/courses/learn-css-grid/project-i/images/telephone.png"
            alt="phone"
            className="icon"
          ></img>
          <p>CALL US: 718-324-6751</p>
        </div>

        <div className="testimonial one">
          <p>
            "PupSpa is a first class doggie grooming operation. My pug VanDyke
            always comes back looking so fresh. Thanks guys!" - Dan{" "}
          </p>
        </div>

        <div className="testimonial two">
          <p>
            "Lua (my shiba inu) and I are HUGE fans of PupSpa! Ryan and his crew
            are always so generous with their time." - KC{" "}
          </p>
        </div>

        <footer>
          <p>️PupSpa 2021</p>
        </footer>
      </div>
    </section>
    // </body>
  );
};
