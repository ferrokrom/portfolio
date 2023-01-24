import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import useInView from "./hooks/useInView";
import useRectBounding from "./hooks/useRectBounding";

const Resume = () => {
  const ref = useRef();
  const [trasform, setTransform] = useState(0);
  const { isVisible } = useRectBounding(ref);
  useEffect(() => {
    function cb() {
      setTransform((prev) => prev + 1);
    }
    document.addEventListener("scroll", cb);
  }, []);
  console.log(trasform);
  return (
    <section
      ref={ref}
      id="resume-section"
      className={`ftco-section ftco-animate ${
        isVisible ? " fadeInUp ftco-animated" : "fadeOutDown "
      }`}
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-baseline ">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-1">Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="resume-wrap d-flex align-items-center gap-3 justify-content-between"
              style={{
                transform: `translateX(${
                  isVisible && 400
                }px),transition:all 2s ease-in-out`,
              }}
            >
              <span className="date">2000-2005</span>
              <h4>Bachelor of Computer Science</h4>
              <span className="position">Istanbul University-Turkey</span>
            </div>
            <div className="resume-wrap d-flex align-items-center gap-3 justify-content-between">
              <span className="date">2008-2010</span>
              <h4>Master's Degree of Management and Organization</h4>
              <span className="position">Marmara University-Turkey</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center">
            <p>
              <a href="/" className="btn btn-primary py-2 px-3">
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
