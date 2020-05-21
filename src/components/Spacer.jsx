import React from "react";
import { createUseStyles } from "react-jss";
import { Container } from "semantic-ui-react";

const useStyles = createUseStyles({
  spacerContainer: {
    background: "#fed39f",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    margin: 0,
    height: "10vh",
  },
});

export default function Spacer() {
  const classes = useStyles();

  return <Container fluid className={classes.spacerContainer} />;
}
