import React from "react";
import Container from "react-bootstrap/Container";
import { createUseStyles } from "react-jss";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
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
        <Grid stackable columns={3}>
          <Grid.Column>
            <Segment>
              <Header size="huge">Name</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph-alt.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">Name</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph-alt.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">Name</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph-alt.png" />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
}
