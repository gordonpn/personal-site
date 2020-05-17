import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import "./Footer.css";

const useStyles = createUseStyles({
  footer: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "1.2rem",
    width: "100vw",
    height: "5vh",
    background: "#f6f6f6",
    textAlign: "center",
    overflow: "auto",
  },
  copyright: {
    width: "75%",
    left: "50%",
    position: "relative",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.footer}>
      <p className={classes.copyright}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        &copy; {new Date().getFullYear()}
        {", "}
        Gordon Pham-Nguyen
      </p>
    </Container>
  );
}
