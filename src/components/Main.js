import React from "react";
import ben from "../images/benfour.jpg";
import reactlogo from "../images/react.png";
import jslogo from "../images/tslogo.png";
import netlogo from "../images/netthree.png";
import mysqllogo from "../images/mysql2.png";
import nodejs from "../images/nodejs3.png";

function Main() {
  return (
    <section className="ftco-section " id="home-section">
      <div className="container">
        <div className="row d-md-flex no-gutters md:mt-4">
          <div className="col-sm-1 col-md-6 text-start md:mt-3 ">
            <div className="text left-main mr-2">
              <span className="subheading">Hello!</span>
              <h1 className="mb-1">
                I'm <span>Ferhat Ogras</span>
              </h1>

              <p className="mt-4 " style={{ fontSize: "14px" }}>
                I am a full stack engineer with a passion for solving complex
                problems and building scalable, intuitive software.
              </p>
              <p style={{ fontSize: "14px" }}>
                {" "}
                I have a strong foundation in computer science, with a
                Bachelor's degree in the field.While I have worked in a variety
                of non-technical roles since graduation, I have always had a
                passion for software development and have been actively learning
                on my own time. I have completed several personal projects and
                online courses to expand my skills, and I am confident that I
                have the foundation to succeed in an engineering role.
              </p>
              <p style={{ fontSize: "14px" }}>
                {" "}
                I am skilled in a range of technologies, including Java,
                JavaScript, C#, HTML, and CSS, and I am always looking for
                opportunities to learn and grow as a developer. I am excited to
                bring my skills and experience to a new full stack engineering
                role and make a meaningful impact at your next project.
              </p>
            </div>
            <div className="skillset">
              <div className="ben-logo">
                {" "}
                <img src={jslogo} className="logoicons" />
              </div>
              <div className="ben-logo">
                <img src={reactlogo} className="logoicons" />
              </div>
              <div className="ben-logo">
                <img src={nodejs} className="logoicons" />
              </div>
              <div className="ben-logo">
                <img src={netlogo} className="logoicons" />
              </div>
              <div className="ben-logo">
                <img src={mysqllogo} className="logoicons" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6  mt-5  ">
            <div className="right-section">
              <div className="ben">
                <img src={ben} className="ben-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
