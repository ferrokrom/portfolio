import React, { useRef } from "react";

import useRectBounding from "../hooks/useRectBounding";

const Contact = () => {
  const ref = useRef();
  const { isVisible } = useRectBounding(ref);
  return (
    <section
      ref={ref}
      id="contact-section"
      className={`ftco-section  ftco-animate ${
        isVisible ? " fadeInUp ftco-animated" : "fadeOutDown"
      }`}
    >
      <div className="container">
        <div className="row no-gutters block-9 d-flex flex-column">
          <div className="row justify-content-center mb-1 pb-3">
            <div className="col-md-7 heading-section text-center ">
              <h2 className="mb-1">Contact Me</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-md-4 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-center pb-3">
                If you'd like to talk about a project you want help with or need
                an advice about product design, just drop me a message at
                <span style={{ color: "white" }}>ferhatogras@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
