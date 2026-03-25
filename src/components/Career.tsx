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
                <h4>Master of Science – Computer Science (IS)</h4>
                <h5>Concordia University, USA</h5>
              </div>
              <h3>2024</h3>
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
                <h4>Apprentice – Electronics Systems</h4>
                <h5>Resolute Electronics Pvt Ltd, India</h5>
              </div>
              <h3>6 Mo.</h3>
            </div>
            <p>
              Supported quality assurance by testing and troubleshooting
              electronic components. Collaborated with cross-functional teams to
              optimize production workflows, improving testing throughput by 15%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IoT Project – Vehicle Accident Detection</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>ECE</h3>
            </div>
            <p>
              Built automatic vehicle accident detection system using a
              microcontroller and GSM module, transmitting GPS coordinates to
              emergency contacts via SMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
