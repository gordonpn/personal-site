import React from "react";
import { createUseStyles } from "react-jss";
import {
  Container,
  Grid,
  Header,
  Image,
  Label,
  List,
  Popup,
  Segment,
} from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBuilding,
  faCode,
  faHandHoldingHeart,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  outerContainer: {
    background:
      "linear-gradient(0deg, rgba(254,211,159,1) 0%, rgba(246,238,201,1) 100%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: 0,
    width: "100vw",
    height: "calc(10vh + max-content)",
  },
});

const data = [
  {
    header: "Introduction",
    icon: faUser,
    content: [
      "I describe myself as a resourceful, detail-oriented self-starter with a great open-mind, a team player with a positive attitude. I love to collaborate, share ideas and knowledge. I am enthusiastic about automation and optimization. I am always looking forward to learning new skills and improve existing ones. I live for challenging problems. I feel the most satisfaction when I have the opportunity to learn and develop. I feel self-fulfillment when meeting the organization’s goals and customer expectations.",
      "When I am not working on software, I enjoy climbing hills on my road bike and rock climbing (bouldering). I enjoy reading as well, mostly non-fiction.",
      "Currently looking for internship opportunities for Summer 2021 and Fall 2021.",
    ],
  },
  {
    header: "Work Experience",
    icon: faBuilding,
    content: [
      {
        company: "Intact Financial Corporation",
        title: "Software Developer Intern",
        date: "2019-05-21 - 2019-12-31",
        location: "Montreal, Canada",
        description: [
          "Contributed to a Software Composition Analysis application to generate reports for executives and developers.",
          "Integrated Jira Cloud into the Information Security department workflow for managing pen testing vulnerabilities, " +
            "which were previously managed on Excel sheets, improving efficiency.",
          "Improved aggregated report design, improving readability for executives.",
          "Wrote unit and integration tests for application components developed.",
          "Major refactoring of codebase to improve maintainability and reusability of components of the software.",
          "Developed various internal automation features and tools.",
        ],
        tags: [
          "Java",
          "Maven",
          "Jenkins",
          "JUnit",
          "Thymeleaf",
          "Eclipse BIRT",
        ],
      },
      {
        company: "Dental Office St-Charles",
        title: "System Administrator",
        date: "2014-04-01 - 2016-11-01",
        location: "Longueuil, Canada",
        description: [
          "Verifying the integrity and availability of all hardware, server resources, systems and key processes, reviewing system and application logs.",
          "Verifying completion of scheduled jobs such as backups.",
          "Perform regular system monitoring, configure and add new services as necessary.",
        ],
        tags: ["Windows"],
      },
    ],
  },
  {
    header: "Volunteering",
    icon: faHandHoldingHeart,
    content: [
      {
        organization: "Canadian University Software Engineering Conference",
        title: "Developer and Designer",
        date: "2020-05-01",
        description:
          "In a team of two, in charge of the overall design of the conference, the landing page, as well as the web apps for CUSEC 2021.",
      },
      {
        organization: "Code In The Dark Event by Osedea",
        title: "Volunteer",
        date: "2019-11-01",
        description:
          "Help out before and during the event with various tasks. " +
          "Code In The Dark is a frontend development competition, without preview.",
      },
      {
        organization: "Concordia Rock Climbers Association",
        title: "Founder and President",
        date: "2016-04-01 – 2018-04-01",
        description:
          "We organized indoor and outdoor trips to initiate students to rock climbing and bouldering.",
      },
    ],
  },
  {
    header: "Technologies",
    icon: faCode,
    content: {
      "Languages, Frameworks & Libraries": [
        { name: "Java", icon: "java" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
        { name: "Golang", icon: "go" },
        { name: "Ruby", icon: "ruby" },
        { name: "CSS", icon: "css3" },
        { name: "Electron.js", icon: "electron" },
        { name: "HTML5", icon: "html5" },
        { name: "Node.js", icon: "node-dot-js" },
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "next-dot-js" },
      ],
      Databases: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Redis", icon: "redis" },
      ],
      "CI/CD": [
        { name: "Drone CI", icon: "drone" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Travis CI", icon: "travisci" },
      ],
      Platforms: [
        { name: "Docker", icon: "docker" },
        { name: "Docker Swarm", icon: "swarm" },
        { name: "Linux", icon: "linux" },
        { name: "Ubuntu", icon: "ubuntu" },
        { name: "Raspberry Pi", icon: "raspberrypi" },
      ],
      Tools: [
        { name: "Maven", icon: "apachemaven" },
        { name: "Cloudflare", icon: "cloudflare" },
        { name: "Git", icon: "git" },
        { name: "Gulp.js", icon: "gulp" },
        { name: "JetBrains", icon: "jetbrains" },
        { name: "Nginx", icon: "nginx" },
        { name: "npm", icon: "npm" },
        { name: "Vim", icon: "vim" },
        { name: "Visual Studio Code", icon: "visualstudiocode" },
      ],
    },
  },
  {
    header: "Education",
    icon: faUniversity,
    content: [
      {
        degree: "Bachelor's of Software Engineering",
        institution: "Concordia University, Montreal, Canada",
        date: "2018-2022",
        description: "Co-op Program, 3.15 GPA",
      },
    ],
  },
  {
    header: "Award",
    icon: faAward,
    content: [
      {
        title: "Top Five Finalist",
        date: "2020-01-26",
        description:
          "Our team made it to be one of the top five projects of the ConUHacks 2020 hackathon",
      },
    ],
  },
];

const SECTIONS = {
  INTRODUCTION: 0,
  WORK_EXPERIENCE: 1,
  VOLUNTEERING: 2,
  TECHNOLOGIES: 3,
  EDUCATION: 4,
  AWARDS: 5,
};

const loadIntro = data[SECTIONS.INTRODUCTION].content.map((value, index) => {
  return (
    <div>
      {index > 0 && <br />}
      <p>{value}</p>
    </div>
  );
});

const loadWork = data[SECTIONS.WORK_EXPERIENCE].content.map((item) => {
  return (
    <>
      <Header size="small">
        {item.title}
        <span style={{ float: "right" }}>{item.company}</span>
      </Header>
      <p>
        {item.location}
        <span style={{ float: "right" }}>{item.date}</span>
      </p>
      <List bulleted>
        {item.description.map((line) => {
          return (
            <>
              <List.Item>{line}</List.Item>
            </>
          );
        })}
      </List>
      <Label.Group size="mini">
        {item.tags.map((tag) => {
          return (
            <>
              <Label>{tag}</Label>
            </>
          );
        })}
      </Label.Group>
    </>
  );
});

const loadVolunteering = data[SECTIONS.VOLUNTEERING].content.map((item) => {
  return (
    <>
      <Header size="small">{item.organization}</Header>
      <p>
        {item.title}
        <span style={{ float: "right" }}>{item.date}</span>
      </p>
      <p>{item.description}</p>
    </>
  );
});

const loadEducation = data[SECTIONS.EDUCATION].content.map((item) => {
  return (
    <>
      <Header size="small">{item.degree}</Header>
      <p>
        {item.institution}
        <span style={{ float: "right" }}>{item.date}</span>
      </p>
      <p>{item.description}</p>
    </>
  );
});

const loadAwards = data[SECTIONS.AWARDS].content.map((item) => {
  return (
    <>
      <Header size="small">
        {item.title}
        <span style={{ float: "right" }}>{item.date}</span>
      </Header>
      <p>{item.description}</p>
    </>
  );
});

const loadTech = Object.keys(data[SECTIONS.TECHNOLOGIES].content).map(
  (category) => {
    return (
      <>
        <Header size="small">{category}</Header>
        <Image.Group size="mini">
          {data[SECTIONS.TECHNOLOGIES].content[category].map((item) => {
            return (
              <Popup
                content={item.name}
                trigger={
                  <Image
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${item.icon}.svg`}
                  />
                }
                position="bottom center"
                size="tiny"
              />
            );
          })}
        </Image.Group>
      </>
    );
  }
);

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
                return <>{loadWork}</>;
              case "Volunteering":
                return <>{loadVolunteering}</>;
              case "Education":
                return <>{loadEducation}</>;
              case "Award":
                return <>{loadAwards}</>;
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
                return null;
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
      <Container>
        <Header size="huge" textAlign="center">
          About Myself
        </Header>
        <Grid stackable doubling columns="2" className="masonry two">
          {loadData}
        </Grid>
      </Container>
    </Container>
  );
}
