import React from "react";
import { createUseStyles } from "react-jss";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBuilding,
  faCode,
  faHandHoldingHeart,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Bodies.css";

const useStyles = createUseStyles({
  outerContainer: {
    background:
      "linear-gradient(0deg, rgba(254,211,159,1) 0%, rgba(246,238,201,1) 100%)",
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

export default function ResumeBody() {
  const classes = useStyles();

  const data = {
    tech: {
      "Languages & Frameworks": [
        "java",
        "python",
        "javascript",
        "go",
        "ruby",
        "react",
        "node-dot-js",
        "html5",
        "css3",
        "flask",
        "electron",
      ],
      Databases: ["mongodb", "postgresql"],
      "CI/CD": ["drone", "jenkins", "githubactions", "travisci"],
      Platforms: ["docker", "github", "linux", "ubuntu", "raspberrypi"],
      Tools: [
        "git",
        "gulp",
        "npm",
        "apachemaven",
        "jetbrains",
        "visualstudiocode",
        "vim",
        "cloudflare",
      ],
    },
  };

  const technologies = Object.keys(data.tech).map((category) => {
    return (
      <>
        <Header size="small">{category}</Header>
        <Image.Group size="mini">
          {data.tech[category].map((item) => {
            return (
              <Image
                src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${item}.svg`}
              />
            );
          })}
        </Image.Group>
      </>
    );
  });

  return (
    <Container fluid className={classes.outerContainer}>
      <Container fluid className={classes.innerContainer}>
        <Header size="huge" textAlign="center">
          About Myself
        </Header>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faUser} />
                {" Introduction"}
              </Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faBuilding} />
                {" Work experience"}
              </Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
                {" Volunteering"}
              </Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faUniversity} />
                {" Education"}
              </Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faAward} />
                {" Awards"}
              </Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faCode} />
                {" Technologies"}
              </Header>
              <Header size="medium">
                Some technologies I am familiar with
              </Header>
              {technologies}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
}
