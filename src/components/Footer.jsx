import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import "./Footer.css";

const useStyles = createUseStyles({
  footer: {
    background:
      "linear-gradient(180deg, rgba(254,224,208,1) 0%, rgba(246,225,201,1) 100%)",
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "1.2rem",
    height: "5vh",
    overflow: "auto",
    textAlign: "center",
    width: "100vw",
  },
  copyright: {
    left: "50%",
    position: "relative",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.footer}>
      <p className={classes.copyright}>
        &copy;
        {` ${new Date().getFullYear()}`}
        {", "}
        Gordon Pham-Nguyen
      </p>
    </Container>
  );
}
