import React, { useEffect, useState, useRef } from "react";
import useInView from "./hooks/useInView";
import useRectBounding from "./hooks/useRectBounding";
import photo1 from "./images/pexels-photo-14175961.jpg";
import Agile from "./images/Agile.jpg";
import sourtimes from "./images/sourtimes.jpg";

const Projects = () => {
  const ref = useRef();
  const [trasform, setTransform] = useState(false);

  const { isVisible } = useRectBounding(ref);

  return (
    <section
      ref={ref}
      id="project-section"
      className={`ftco-section ftco-animate ${
        isVisible ? " fadeInUp ftco-animated" : "fadeOutDown "
      }`}
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-1">My Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className={`project img  d-flex justify-content-center align-items-center ftco-animate ${
                isVisible ? " fadeInUp ftco-animated" : ""
              }`}
              style={{
                backgroundImage: `url(${Agile})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a
                    href="https://agileboardapp.azurewebsites.net/"
                    target="_blank"
                  >
                    Agile App
                  </a>
                </h3>
                <span>Web Application Development</span>
              </div>
            </div>
            <div style={{ fontSize: "14px" }}>
              React - TypeScript-ReduxTK - ReactQuery Asp.net - MySQL{" "}
            </div>

            <div className="d-flex flex-column">
              <span>
                <span style={{ color: "white", marginRight: "5px" }}>
                  username:
                </span>{" "}
                admin@admin{" "}
              </span>
              <span>
                <span style={{ color: "white", marginRight: "5px" }}>
                  password:
                </span>
                5{" "}
              </span>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div
              className={`project img  d-flex justify-content-center align-items-center ftco-animate ${
                isVisible ? " fadeInUp ftco-animated" : ""
              }`}
              style={{
                backgroundImage: `url(${sourtimes})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a
                    href="https://stver3.azurewebsites.net/tech"
                    target="_blank"
                  >
                    Daily News Social Media App with Admin Panel
                  </a>
                </h3>
                <span>Web Application</span>
              </div>
            </div>
            <div style={{ fontSize: "14px" }}>
              React -TypeScript - ReduxTK - Express - MongoDB
            </div>

            <div className="d-flex flex-column">
              <span>
                <span style={{ color: "white", marginRight: "5px" }}>
                  username:
                </span>{" "}
                admin{" "}
              </span>
              <span>
                <span style={{ color: "white", marginRight: "5px" }}>
                  password:{" "}
                </span>{" "}
                password
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`project img  d-flex justify-content-center align-items-center ftco-animate
               ${isVisible ? " fadeInUp ftco-animated" : ""}`}
              style={{
                backgroundImage: `url("https://t3.ftcdn.net/jpg/03/53/83/92/240_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg")`,
              }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Avatar Photo Generation by AI(Coming Soon)</a>
                </h3>
                <span>Web Application</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
