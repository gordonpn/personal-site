import React, { Fragment } from "react";
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
import LazyLoad from "react-lazyload";
import { projects as data } from "../data/index";

const useStyles = createUseStyles({
  outerContainer: {
    background:
      "linear-gradient(180deg, rgba(254,211,159,1) 0%, rgba(246,225,201,1) 100%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: 0,
    width: "100vw",
    height: "calc(10vh + max-content)",
  },
});

const loadData = data.map((project) => {
  return (
    <Fragment key={project.name}>
      <Grid.Column>
        <Header size="huge" attached="top">
          {project.name}
        </Header>
        <Segment raised attached>
          {project.screenshot && (
            <>
              <a
                href={project.url || project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoad once>
                  <Image src={project.screenshot} />
                </LazyLoad>
              </a>
              <Divider />
            </>
          )}
          {project.description && (
            <>
              <p>{project.description}</p>
              <Label.Group size="mini">
                {project.tags.map((value) => {
                  return (
                    <Fragment key={value}>
                      <Label>{value}</Label>
                    </Fragment>
                  );
                })}
              </Label.Group>
              <Divider />
            </>
          )}
          {project.url && (
            <>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {" Website"}
              </a>
            </>
          )}
          {project.link && (
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
          )}
        </Segment>
      </Grid.Column>
    </Fragment>
  );
});

export default function ProjectsBody() {
  const classes = useStyles();

  return (
    <Container fluid className={classes.outerContainer}>
      <Container>
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
