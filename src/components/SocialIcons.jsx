import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { createUseStyles } from "react-jss";
import * as PropTypes from "prop-types";

const useStyles = createUseStyles({
  icons: {
    padding: "0.15em",
    marginTop: "0.7rem",
  },
});

export default function SocialIcons(props) {
  const classes = useStyles();
  const { size } = props;
  return (
    <>
      <a
        href="https://www.linkedin.com/in/gordonpn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size={size}
          className={classes.icons}
        />
      </a>
      <a
        href="https://github.com/gordonpn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size={size}
          className={classes.icons}
        />
      </a>
      <a
        href="mailto:contact@gordon-pn.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size={size}
          className={classes.icons}
        />
      </a>
    </>
  );
}

SocialIcons.propTypes = {
  size: PropTypes.string,
};

SocialIcons.defaultProps = {
  size: "3x",
};
