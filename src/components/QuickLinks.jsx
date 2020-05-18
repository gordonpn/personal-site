import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import SocialIcons from "./SocialIcons";

const useStyles = createUseStyles({
  icons: {
    float: "right",
    marginLeft: "auto",
    marginRight: 0,
    textAlign: "right",
    display: "block",
  },
});

export default function QuickLinks() {
  const classes = useStyles();
  return (
    <Container className={classes.icons}>
      <SocialIcons />
    </Container>
  );
}
