import React from "react";
import Container from "react-bootstrap/Container";
import { createUseStyles } from "react-jss";
import { Header, Image } from "semantic-ui-react";

const useStyles = createUseStyles({
  outerContainer: {
    background:
      "linear-gradient(0deg, rgba(254,224,208,1) 0%, rgba(246,225,201,1) 100%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: 0,
    overflow: "auto",
    width: "100vw",
  },
  innerContainer: {
    marginBottom: "0px",
    overflow: "auto",
    paddingTop: "50px",
    width: "97%",
  },
});

export default function TechBody() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.outerContainer}>
      <Container fluid className={classes.innerContainer}>
        <Header size="huge" textAlign="center">
          Tech Stack
        </Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/image-square.png" />
      </Container>
    </Container>
  );
}
