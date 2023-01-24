import React, { useRef, useState, useEffect } from "react";
import useRectBounding from "../hooks/useRectBounding";

function Skills() {
  const ref = useRef();
  const { isVisible } = useRectBounding(ref);
  const [transform, setTransform] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransform((prev) => !prev);
    }, 1800);
  }, [isVisible]);

  return (
    <section
      className={`ftco-section  ftco-animate ${
        isVisible ? " fadeInUp ftco-animated" : "fadeOutDown"
      }`}
      id="skills-section"
      ref={ref}
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="progress-wrap ">
              <h3>React/JS/TS</h3>
              <div className="progress">
                {isVisible && (
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="progress-wrap ">
              <h3>HTML/CSS</h3>
              <div className="progress">
                {isVisible && (
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="progress-wrap ">
              <h3>JAVA</h3>
              <div className="progress">
                {isVisible && (
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="progress-wrap ">
              <h3>NodeJS</h3>
              <div className="progress">
                {isVisible && (
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="progress-wrap ">
              <h3>C#/.NET</h3>
              <div className="progress">
                {isVisible && (
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
