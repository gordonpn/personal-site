import React, { Fragment } from "react";
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
import { resume as data } from "../data/index";

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
    <div key={value}>
      {index > 0 && <br />}
      <p>{value}</p>
    </div>
  );
});

const loadWork = data[SECTIONS.WORK_EXPERIENCE].content.map((item) => {
  return (
    <Fragment key={item.date}>
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
            <Fragment key={line}>
              <List.Item>{line}</List.Item>
            </Fragment>
          );
        })}
      </List>
      <Label.Group size="mini">
        {item.tags.map((tag) => {
          return (
            <Fragment key={tag}>
              <Label>{tag}</Label>
            </Fragment>
          );
        })}
      </Label.Group>
    </Fragment>
  );
});

const loadVolunteering = data[SECTIONS.VOLUNTEERING].content.map((item) => {
  return (
    <Fragment key={item.organization}>
      <Header size="small">{item.organization}</Header>
      <p>
        {item.title}
        <span style={{ float: "right" }}>{item.date}</span>
      </p>
      <p>{item.description}</p>
    </Fragment>
  );
});

const loadEducation = data[SECTIONS.EDUCATION].content.map((item) => {
  return (
    <Fragment key={item.date}>
      <Header size="small">{item.degree}</Header>
      <p>
        {item.institution}
        <span style={{ float: "right" }}>{item.date}</span>
      </p>
      <p>{item.description}</p>
    </Fragment>
  );
});

const loadAwards = data[SECTIONS.AWARDS].content.map((item) => {
  return (
    <Fragment key={item.date}>
      <Header size="small">
        {item.title}
        <span style={{ float: "right" }}>{item.date}</span>
      </Header>
      <p>{item.description}</p>
    </Fragment>
  );
});

const loadTech = Object.keys(data[SECTIONS.TECHNOLOGIES].content).map(
  (category) => {
    return (
      <Fragment key={category}>
        <Header size="small">{category}</Header>
        <Image.Group size="mini">
          {data[SECTIONS.TECHNOLOGIES].content[category].map((item) => {
            return (
              <Popup
                key={item.name}
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
      </Fragment>
    );
  }
);

const loadData = data.map((item) => {
  return (
    <Fragment key={item.header}>
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
    </Fragment>
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
