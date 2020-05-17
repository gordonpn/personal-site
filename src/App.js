import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import IntroBody from "./components/IntroBody";
import Footer from "./components/Footer";
import ResumeBody from "./components/ResumeBody";
import ProjectsBody from "./components/ProjectsBody";
import TechBody from "./components/TechBody";

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <IntroBody />
      <ResumeBody />
      <ProjectsBody />
      <TechBody />
      <Footer />
    </>
  );
}
