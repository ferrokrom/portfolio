import React from "react";

function Main() {
  return (
    <section className="ftco-section " id="home-section">
      <div className="container">
        <div className="row d-md-flex no-gutters">
          <div className="col-sm-1 col-md-6 text-start mt-5  ">
            <div className="text left-main mr-2">
              <span className="subheading">Hello!</span>
              <h1 className="mb-1 mt-1">
                I'm <span>Ferhat Ogras</span>
              </h1>
              <h2 className="mb-4">Software Developer</h2>
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
          </div>
          <div className="col-lg-1 col-md-6 text-start mt-5 ">
            <div className="text left-main">
              <img src="https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?t=st=1672848463~exp=1672849063~hmac=0e78cc69053bf9d1ec4a9c5885fea0afb0cb9f4c3d257b56a1355280387d48b4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
