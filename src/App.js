import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useRef, useState } from "react";
import useInView from "./hooks/useInView";

function App() {
  const refResume = useRef();
  const refSkills = useRef();
  const refProjects = useRef();
  const refContact = useRef();

  const refS = [refResume, refSkills, refProjects, refContact];

  return (
    <div className="App">
      <Header />
      <Main />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
