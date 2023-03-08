import React from "react";

export const FreeQuote = () => {
  return (
    <section className="resume-section" id="freequote">
      <div className="resume-section-content">
        <h2 className="mb-5">Build Quote</h2>
        <div className="subheading mb-3">
          Answer the questions below for a free quote.
        </div>
        <hr></hr>
        {/* FORM */}
        {/* Docs https://formsubmit.co/ */}
        <form
          action="https://formsubmit.co/65b3f2b835c805c6fd13438e79a3e080"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFullName"
                name="fullName"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                required
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="businessPhone">Contact Phone</label>
            <input
              type="text"
              className="form-control"
              id="businessPhone"
              name="phone"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              className="form-control"
              id="businessName"
              name="businessName"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="businessDescription">Description of Business</label>
            <textarea
              className="form-control"
              id="businessDescription"
              name="businessDescription"
              placeholder="Provide a short description of your business services."
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="businessWebSite">Current Website</label>
            <input
              type="text"
              className="form-control"
              id="businessWebSite"
              name="businessWebSite"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="projectDescription">Description of Project</label>
            <textarea
              className="form-control"
              id="projectDescription"
              name="projectDescription"
              placeholder="Tell us about what you would like to create."
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="database">Database Requirements</label>
            <p style={{ opacity: 0.75 }}>
              Will your project need to store data?
            </p>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="databaseNo">
                No
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="database"
                id="databaseNo"
                value="no"
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="databaseYes">
                Yes
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="database"
                id="databaseYes"
                value="yes"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="userSignIn">User Sign In</label>
            <p style={{ opacity: 0.75 }}>
              Will your project require users to sign in?
            </p>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="userSignInNo">
                No
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="userSignIn"
                id="userSignInNo"
                value="no"
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="userSignInYes">
                Yes
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="userSignIn"
                id="userSignInYes"
                value="yes"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="developmentSupport">Development Support</label>
            <p style={{ opacity: 0.75 }}>
              Will your project require support after launch?
            </p>
            <div className="form-check form-check-inline">
              <label
                className="form-check-label"
                htmlFor="developmentSupportNo"
              >
                No
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="developmentSupport"
                id="developmentSupportNo"
                value="no"
              />
            </div>
            <div className="form-check form-check-inline">
              <label
                className="form-check-label"
                htmlFor="developmentSupportYes"
              >
                Yes
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="developmentSupport"
                id="developmentSupportYes"
                value="yes"
              />
            </div>
          </div>
          <hr></hr>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
