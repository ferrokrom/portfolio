import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
