import React from "react";
import "semantic-ui-css/semantic.min.css";
import IntroBody from "./components/IntroBody";
import Footer from "./components/Footer";
import ResumeBody from "./components/ResumeBody";
import ProjectsBody from "./components/ProjectsBody";
import "./index.css";
import Spacer from "./components/Spacer";

export default function App() {
  return (
    <>
      <IntroBody />
      <ResumeBody />
      <Spacer />
      <ProjectsBody />
      <Footer />
    </>
  );
}
