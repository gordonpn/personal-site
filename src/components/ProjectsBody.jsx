import React from "react";
import { createUseStyles } from "react-jss";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Label,
  Segment,
} from "semantic-ui-react";
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
    description:
      "Cross-platform YouTube downloader app, that downloads concurrently. Format in video or audio in MP3.",
    link: "https://github.com/gordonpn/youtube-downloader-electron",
    url: "",
    screenshot:
      "https://github.com/gordonpn/youtube-downloader-electron/blob/master/doc/recording.gif?raw=true",
    tags: ["JavaScript", "Node.js", "Electron.js", "Desktop"],
  },
  {
    name: "Reddit Slack Bot",
    description:
      "I believe Reddit has a lot of good content, but it requires manual sifting through, with this bot I " +
      "can get notification when a post reaches the 'hot' state directly into my private Slack workspace!",
    link: "https://github.com/gordonpn/reddit-slack-bot",
    url: "",
    screenshot:
      "https://github.com/gordonpn/reddit-slack-bot/blob/master/docs/screenshot.png?raw=true",
    tags: ["Python", "Docker", "MongoDB"],
  },
  {
    name: "JavaScript Boilerplate CLI Tool",
    description:
      "JS projects have so much tooling! This is a commandline tool that generates a Node.js or React.js project with some important tools. " +
      "Such as, ESLint, Prettier, Stylelint, etc. Can be installed through Ruby Gems and currently has 400+ total downloads. 😲",
    link: "https://github.com/gordonpn/create-boilerplate-cli",
    url: "",
    screenshot: "https://asciinema.org/a/4UemVZE29SWWrfV9Nt2jSo2n2.svg",
    tags: ["Ruby"],
  },
  {
    name: "Hot Red Flag Deals",
    description:
      "Software as a service scraping the crowdsourced Hot Deals forums and delivering newsletter emails on trending deals.",
    link: "https://github.com/gordonpn/hot-flag-deals",
    url: "",
    screenshot: "",
    tags: ["Go", "PostgreSQL", "Docker", "mjml"],
  },
  {
    name: "Moodle Scraper",
    description:
      "Automatically scrape and convert files from Concordia Moodle, saves time from manually browsing and downloading!",
    link: "https://github.com/gordonpn/moodle-scraper",
    url: "",
    screenshot: "",
    tags: ["Python", "Docker"],
  },
  {
    name: "Internet Speed Tests Visualized",
    description:
      "Collects data on home internet speed tests and visualize them on a front end. " +
      "Note: this project is being refactored and is not up right now",
    link: "https://github.com/gordonpn/isp-speed-expectation-vs-reality",
    url: "",
    screenshot: "",
    tags: ["JavaScript", "Python", "Node.js", "React.js", "Docker", "MongoDB"],
  },
  {
    name: "Music Video Generator",
    description:
      "Automagically generate a music video based a user input (song title and artist). " +
      "We leveraged OctaveGroup's TouchTunes API for song information and ShutterStock's API for visual content. " +
      "Then, Natural Language Processing (NLP) was used on the lyrics to process meaning and fetch relevant media. " +
      "Team effort of four.",
    link: "https://github.com/tiffzeng/conu-hacks-2020",
    url: "https://devpost.com/software/picture-video-music-generator",
    screenshot:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/920/419/datas/original.png",
    tags: ["JavaScript", "Node.js", "React.js"],
  },
  {
    name: "Conventions Documentation",
    description:
      "Some documentation never hurt anybody! I wrote a bit about some project and Git conventions I personally like. " +
      "I do my best to practice and follow.",
    link: "https://github.com/gordonpn/git-conventions-guide",
    url: "",
    screenshot: "",
    tags: ["Markdown"],
  },
  {
    name: "Personal Site",
    description: "Last, but not least! This site to showcase myself.",
    link: "https://github.com/gordonpn/personal-site",
    url: "http://gordon-pn.com/",
    screenshot: "",
    tags: ["JavaScript", "React.js", "Docker"],
  },
];

const loadData = data.map((project) => {
  return (
    <>
      <Grid.Column>
        <Header size="huge" attached="top">
          {project.name}
        </Header>
        <Segment raised attached>
          {project.screenshot ? (
            <>
              <a
                href={project.url ? project.url : project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={project.screenshot} />
              </a>
              <Divider />
            </>
          ) : (
            <></>
          )}
          {project.description ? (
            <>
              <p>{project.description}</p>
              <Label.Group size="mini">
                {project.tags.map((value) => {
                  return (
                    <>
                      <Label>{value}</Label>
                    </>
                  );
                })}
              </Label.Group>
              <Divider />
            </>
          ) : (
            <></>
          )}
          {project.url ? (
            <>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {" Website"}
              </a>
            </>
          ) : (
            <></>
          )}
          {project.link ? (
            <>
              <p>
                {"Source code on "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </>
          ) : (
            <></>
          )}
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
        <Grid stackable doubling columns={3} className="masonry three">
          {loadData}
        </Grid>
      </Container>
    </Container>
  );
}
