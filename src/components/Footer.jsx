import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";

const useStyles = createUseStyles({
  footer: {
    width: "100vw",
    height: "25vh",
    background: "#fffff4",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.footer}>
      <p>Footer</p>
    </Container>
  );
}
