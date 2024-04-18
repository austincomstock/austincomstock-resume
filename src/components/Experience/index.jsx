import React from "react";

export const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <hr></hr>
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Web Developer</h3>
            <div className="subheading mb-3">Articulate LLC</div>
            <p>
              Responsible for building, testing and maintaining responsive
              websites.{" "}
            </p>
            <ul>
              <li>
                Utilizing HTML, CSS, JavaScript and React.js to design front-end
                and implement visually appealing, responsive and interactive web
                pages. Building with a focus on search engine optimization.
              </li>
              <br></br>
              <li>
                Prioritize communication and collaboration with stakeholders to
                ensure user-friendly interfaces that meet design requirements
                and exceed expectations. Managing project versions effectively
                using version control systems.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">March 2022 - Current</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Operations Manager</h3>
            <div className="subheading mb-3">Enova International</div>
            <p>
              Recruited to co-lead and manage the startup of a new Utah office.
              After the office and teams were established, led a
              cross-functional team of fifteen representatives.
            </p>
            <ul>
              <li>
                The team goal was to onboard new customers by assisting them
                with personal loans. Successful here by using communication and
                analytic skills to review data, identify trends and drive
                results based on the data.
              </li>
              <br></br>
              <li>
                Identified need and spearheaded the creation of an internal Wiki
                page to house training content. This decreased the ramp-up time
                for leadership to onboard and train new employees on processes
                by 50% due to the content being available in one location.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">February 2020 - March 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Quality Assurance Manager</h3>
            <div className="subheading mb-3">Upwell Health</div>
            <p>
              Promoted internally to restructure Quality Assurance department by
              implementing call auditing software.
            </p>
            <ul>
              <li>
                Successfully increased the call auditing percentage with 75%
                less staff, increasing from 6% of total calls audited to 40% by
                leading the implementation of a call auditing software to
                support the limited staff. This decreased compliance risk while
                increasing customer satisfaction and improving the bandwidth of
                the legal team.
              </li>
              <br></br>
              <li>
                Played a major role in creating processes within the Compliance
                and Human Resource departments to identify disciplinary
                guidelines for representatives failing to meet compliance
                standards along with recognition processes to highlight
                outstanding performance. Resulting in greater collaboration and
                positive relationships between departments.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">October 2016 - April 2019</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Corporate Compliance Supervisor</h3>
            <div className="subheading mb-3">Alliance Health</div>
            <p>
              Led team whose focus was to review and resolve escalated
              complaints from customers threatening to, or taking legal action
              against the company.
            </p>
            <ul>
              <li>
                Developed reports to track the complaint pipeline along with a
                secondary process to escalate high level complaints to the
                executive group. This brought awareness to the leadership team
                on business processes that needed improvement.
              </li>
              <br></br>
              <li>
                Drafted response letters addressed to BBB, AG, BOP and other
                agencies for the in-house counsel to resolve complaints
                resulting in higher business ratings and customer satisfaction.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">October 2015 - October 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
};
