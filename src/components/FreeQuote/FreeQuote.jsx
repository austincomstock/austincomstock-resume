import React from "react";

export const FreeQuote = () => {
  return (
    <section className="resume-section" id="freequote">
      <div className="resume-section-content">
        <h2 className="mb-5">Build Quote</h2>
        <p>Answer the questions below for a free quote.</p>
        <hr></hr>
        {/* FORM */}
        {/* Docs https://formsubmit.co/ */}
        <form
          action="https://formsubmit.co/65b3f2b835c805c6fd13438e79a3e080"
          method="POST"
        >
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputFullName">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="inputFullName"
                name="fullName"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                name="email"
                required
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="businessPhone">Contact Phone</label>
            <input
              type="text"
              class="form-control"
              id="businessPhone"
              name="phone"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="businessName">Business Name</label>
            <input
              type="text"
              class="form-control"
              id="businessName"
              name="businessName"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="businessDescription">Description Of Business</label>
            <textarea
              class="form-control"
              id="businessDescription"
              name="businessDescription"
              placeholder="Provide a short description of your business services."
            />
          </div>
          <div class="form-group col-md-6">
            <label for="businessWebSite">Current Website</label>
            <input
              type="text"
              class="form-control"
              id="businessWebSite"
              name="businessWebSite"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="projectDescription">Description Of Project</label>
            <textarea
              class="form-control"
              id="projectDescription"
              name="projectDescription"
              placeholder="Tell us about what you would like to create."
            />
          </div>
          <div class="form-group col-md-6">
            <label for="database">Database Requirements</label>
            <p style={{ opacity: 0.75 }}>
              Will your project need to store data?
            </p>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="databaseNo">
                No
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="database"
                id="databaseNo"
                value="no"
              />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="databaseYes">
                Yes
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="database"
                id="databaseYes"
                value="yes"
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="userSignIn">User Sign In</label>
            <p style={{ opacity: 0.75 }}>
              Will your project require users to sign in?
            </p>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="userSignInNo">
                No
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="userSignIn"
                id="userSignInNo"
                value="no"
              />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="userSignInYes">
                Yes
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="userSignIn"
                id="userSignInYes"
                value="yes"
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="developmentSupport">Development Support</label>
            <p style={{ opacity: 0.75 }}>
              Will your project require support after launch?
            </p>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="developmentSupportNo">
                No
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="developmentSupport"
                id="developmentSupportNo"
                value="no"
              />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="developmentSupportYes">
                Yes
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="developmentSupport"
                id="developmentSupportYes"
                value="yes"
              />
            </div>
          </div>
          <hr></hr>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
