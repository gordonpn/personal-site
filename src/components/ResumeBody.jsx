import React from "react";
import Container from "react-bootstrap/Container";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  resumeBody: {
    background: "#f9f4de",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    margin: 0,
    width: "100vw",
  },
});

export default function ResumeBody() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.resumeBody}>
      <h1>ResumeBody</h1>
    </Container>
  );
}
