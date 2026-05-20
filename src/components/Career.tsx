import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Science in Computer Science – Information Systems</h4>
                <h5>Concordia University, USA</h5>
              </div>
              <h3>Dec 2024</h3>
            </div>
            <p>
              GPA 3.3/4.0. Coursework in Database Systems, Software Engineering,
              Web Application Development, Cloud Computing, Data Warehousing, and
              Systems Analysis & Design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Velden Health, Chicago, IL</h5>
              </div>
              <h3>Aug 2025 – Present</h3>
            </div>
            <p>
              Assist with the full data lifecycle, including requirements gathering,
              modeling, dashboard development, testing, and deployment. Build
              dashboards to track revenue cycle KPIs, denial trends, and operational
              performance using SQL-driven datasets. Write SQL and Python to extract,
              transform, and automate healthcare reporting. Maintain data accuracy and
              collaborate on scalable internal data models and architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Mphasis Pvt Ltd, Hyderabad, India</h5>
              </div>
              <h3>Jan 2021 – Jul 2023</h3>
            </div>
            <p>
              Supported analytics and data engineering for a revenue cycle management
              startup, working across the full data lifecycle from requirements to
              deployment. Built SQL- and Python-driven dashboards to track revenue
              cycle KPIs, denial trends, and operational performance. Developed and
              automated ETL pipelines using SQL and Python to extract, transform, and
              deliver accurate healthcare reporting while maintaining scalable
              internal data models and architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Apprentice – Electronics Systems</h4>
                <h5>Resolute Electronics Pvt Ltd, India</h5>
              </div>
              <h3>6 Mo.</h3>
            </div>
            <p>
              Supported quality assurance by testing and troubleshooting electronic
              components, documenting system configurations and test results for
              process improvement. Collaborated with cross-functional teams to
              optimize production workflows, improving testing throughput by 15%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
