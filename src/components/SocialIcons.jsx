import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  icons: {
    padding: "0.15em",
    marginTop: "0.7rem",
  },
});

export default function SocialIcons() {
  const classes = useStyles();
  return (
    <>
      <a
        href="https://www.linkedin.com/in/gordonpn/"
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
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" className={classes.icons} />
      </a>
      <a
        href="mailto:contact@gordon-pn.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="3x"
          className={classes.icons}
        />
      </a>
    </>
  );
}
