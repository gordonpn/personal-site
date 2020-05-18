import React from "react";
import Container from "react-bootstrap/Container";
import { createUseStyles } from "react-jss";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
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
              <p>
                Words like these will indeed be spoken to you, if only your
                perseverance shall have an object that is worth while, if only
                you will not have to do or to suffer anything unworthy of a good
                man; besides, a good man will not waste himself upon mean and
                discreditable work or be busy merely for the sake of being busy.
                Neither will he, as you imagine, become so involved in ambitious
                schemes that he will have continually to endure their ebb and
                flow. Nay, when he sees the dangers, uncertainties, and hazards
                in which he was formerly tossed about, he will withdraw—not
                turning his back to the foe, but falling back little by little
                to a safe position.
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header size="huge">
                <FontAwesomeIcon icon={faBuilding} />
                {" Work experience"}
              </Header>
              <p>
                Peace you can claim for yourself without being disliked by
                anyone, without any sense of loss, and without any pangs of
                spirit. For what will you leave behind you that you can imagine
                yourself reluctant to leave? Your clients? But none of these men
                courts you for yourself; they merely court something from you.
                People used to hunt friends, but now they hunt pelf; if a lonely
                old man changes his will, the morning-caller transfers himself
                to another door. Great things cannot be bought for small sums;
                so reckon up whether it is preferable to leave your own true
                self, or merely some of your belongings.
              </p>
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
