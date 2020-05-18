import React from "react";
import { createUseStyles } from "react-jss";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";
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

const data = [
  {
    name: "Youtube Downloader",
    description: "Cross-platform YouTube downloader app built with Electron.js",
    link: "https://github.com/gordonpn/youtube-downloader-electron",
    screenshot:
      "https://github.com/gordonpn/youtube-downloader-electron/blob/master/doc/recording.gif?raw=true",
  },
  {
    name: "Name",
    description: "",
    link: "",
    screenshot: "https://react.semantic-ui.com/images/wireframe/image.png",
  },
  {
    name: "Name",
    description: "",
    link: "",
    screenshot: "https://react.semantic-ui.com/images/wireframe/image.png",
  },
  {
    name: "Name",
    description: "",
    link: "",
    screenshot: "https://react.semantic-ui.com/images/wireframe/image.png",
  },
];

const loadData = data.map((project) => {
  return (
    <>
      <Grid.Column>
        <Segment raised>
          <Header size="huge">{project.name}</Header>
          <Image src={project.screenshot} />
        </Segment>
      </Grid.Column>
    </>
  );
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
          {loadData}
        </Grid>
      </Container>
    </Container>
  );
}
