import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const useStyles = createUseStyles({
  icons: {
    float: "right",
    marginLeft: "auto",
    marginRight: 0,
    textAlign: "right",
    display: "block",
    padding: "0.1em",
    marginTop: "0.7rem",
  },
  linkColor: {
    color: "#000",
    "&:hover": {
      color: "#ff9800",
    },
  },
});

export default function QuickLinks() {
  const classes = useStyles();
  return (
    <>
      <a
        href="https://www.linkedin.com/in/gordonpn/"
        className={classes.linkColor}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="3x"
          className={classes.icons}
        />
      </a>
      <a
        href="https://github.com/gordonpn"
        className={classes.linkColor}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" className={classes.icons} />
      </a>
      <a href="mailto:contact@gordon-pn.com" className={classes.linkColor}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="3x"
          className={classes.icons}
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
    </>
  );
}
