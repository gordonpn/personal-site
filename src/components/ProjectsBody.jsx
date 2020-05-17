import React from "react";
import Container from "react-bootstrap/Container";
import { createUseStyles } from "react-jss";
import { Header, Image } from "semantic-ui-react";
import "./Bodies.css";

const useStyles = createUseStyles({
  outerContainer: {
    background:
      "linear-gradient(180deg, rgba(254,211,159,1) 0%, rgba(246,225,201,1) 100%)",
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

export default function ProjectsBody() {
  const classes = useStyles();
  return (
    <Container fluid className={classes.outerContainer}>
      <Container fluid className={classes.innerContainer}>
        <Header size="huge" textAlign="center">
          Projects
        </Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/text-image.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/text-image.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/text-image.png" />
      </Container>
    </Container>
  );
}
