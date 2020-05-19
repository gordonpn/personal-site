import React from "react";
import { createUseStyles } from "react-jss";
import "./IntroBody.css";
import { Container } from "semantic-ui-react";
import QuickLinks from "./QuickLinks";
import Chevron from "./Chevron";

const useStyles = createUseStyles({
  mainBackground: {
    background:
      "linear-gradient(180deg, rgba(254,211,159,1) 0%,rgba(246,238,201,1) 67%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    margin: 0,
    width: "100vw",
  },
  nameTitle: {
    width: "50%",
    left: "50%",
    position: "absolute",
    top: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  name: {
    fontFamily: "Pacifico, cursive",
    fontSize: "4rem",
    letterSpacing: "-0.15rem",
  },
  title: {
    fontFamily: "PT Mono, monospace",
    fontSize: "1.5rem",
    lineHeight: "-1.5em",
    left: "50%",
    position: "relative",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default function IntroBody() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.mainBackground}>
      <Container className={classes.nameTitle}>
        <p className={classes.name}>Gordon Pham-Nguyen</p>
        <p className={classes.title}>Software Developer</p>
        <QuickLinks />
      </Container>
      <Chevron />
    </Container>
  );
}
