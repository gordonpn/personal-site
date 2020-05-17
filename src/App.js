import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import IntroBody from "./components/IntroBody";
import Footer from "./components/Footer";

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <IntroBody />
      <Footer />
    </>
  );
}
