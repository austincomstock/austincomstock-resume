import React from "react";

export const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Operations Manager</h3>
            <div className="subheading mb-3">Enova International</div>
            <p>
              Identified need and spearheaded creation of internal
              wiki/confluence pages to optimize the onboarding and training
              process for leadership. This dramatically improved the onboarding
              process for managers and the leadership team due to all of the
              content being available in one location.
            </p>
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
              Brought in to restructure QA department. Successfully improved
              call auditing percentage with 75% less staff, increasing from 6%
              of total calls audited to 30% by leading the implementation of a
              call auditing software to support the limited staff. Played a
              major role in creating processes within the compliance and human
              resource departments to identify disciplinary guidelines for
              representatives failing to meet compliance standards along with
              recognition processes to highlight outstanding performance.
            </p>
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
              complaints from customers threating or taking legal action against
              the company. Developed reporting to track the complaint pipeline
              along with a secondary process to escalate high level complaints
              to the executive group. Drafted response letters addressed to BBB,
              AG, BOP and other agencies for our in-house counsel to resolve
              complaints resulting in higher business ratings and customer
              satisfaction.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">October 2015 - October 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
};
