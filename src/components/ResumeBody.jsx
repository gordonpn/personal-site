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

const data = [
  {
    header: "Introduction",
    icon: faUser,
    content: [
      "I describe myself as a resourceful, detail-oriented self-starter with a great open-mind, a team player with a positive attitude. I love to collaborate, share ideas and knowledge. I am enthusiastic about automation and optimization. I am always looking forward to learning new skills and improve existing ones. I live for challenging problems. I feel the most satisfaction when I have the opportunity to learn and develop. I feel self-fulfillment when meeting the organization’s goals and customer expectations.",
      "When I am not working on software, I enjoy climbing hills on my road bike and rock climbing (bouldering). I enjoy reading as well, mostly non-fiction.",
      "Currently looking for internship opportunities for Summer 2020, Summer 2021 and Fall 2021.",
    ],
  },
  { header: "Work Experience", icon: faBuilding },
  { header: "Volunteering", icon: faHandHoldingHeart },
  { header: "Education", icon: faUniversity },
  { header: "Award", icon: faAward },
  {
    header: "Technologies",
    icon: faCode,
    content: {
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
  },
];

const loadIntro = data[0].content.map((value, index) => {
  return (
    <div>
      {index === 0 ? (
        <>
          <p>{value}</p>
        </>
      ) : (
        <>
          <br />
          <p>{value}</p>
        </>
      )}
    </div>
  );
});

const loadTech = Object.keys(data[5].content).map((category) => {
  return (
    <>
      <Header size="small">{category}</Header>
      <Image.Group size="mini">
        {data[5].content[category].map((item) => {
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

const loadData = data.map((item) => {
  return (
    <>
      <Grid.Column>
        <Segment>
          <Header size="huge">
            <FontAwesomeIcon icon={item.icon} />
            {` ${item.header}`}
          </Header>
          {(() => {
            switch (item.header) {
              case "Introduction":
                return <>{loadIntro}</>;
              case "Work Experience":
                return <></>;
              case "Volunteering":
                return <></>;
              case "Education":
                return <></>;
              case "Award":
                return <></>;
              case "Technologies":
                return (
                  <>
                    <Header size="medium">
                      Some technologies I am familiar with
                    </Header>
                    {loadTech}
                  </>
                );
              default:
                return <></>;
            }
          })()}
        </Segment>
      </Grid.Column>
    </>
  );
});

export default function ResumeBody() {
  const classes = useStyles();

  return (
    <Container fluid className={classes.outerContainer}>
      <Container fluid className={classes.innerContainer}>
        <Header size="huge" textAlign="center">
          About Myself
        </Header>
        <Grid stackable columns={2}>
          {loadData}
        </Grid>
      </Container>
    </Container>
  );
}
