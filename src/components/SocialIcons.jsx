import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { createUseStyles } from "react-jss";
import * as PropTypes from "prop-types";

const data = [
  { icon: faGithub, link: "https://github.com/gordonpn" },
  { icon: faFacebookMessenger, link: "https://www.messenger.com/t/Gordonpn" },
  { icon: faInstagram, link: "https://www.instagram.com/gordonpn/" },
  { icon: faEnvelope, link: "mailto:contact@gordon-pn.com" },
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/gordonpn" },
];

const useStyles = createUseStyles({
  icons: {
    padding: "0.15em",
    marginTop: "0.7rem",
  },
});

export default function SocialIcons(props) {
  const classes = useStyles();
  const { size } = props;

  const loadData = data.map((socialItem) => {
    return (
      <>
        <a href={socialItem.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={socialItem.icon}
            size={size}
            className={classes.icons}
          />
        </a>
      </>
    );
  });

  return <>{loadData}</>;
}

SocialIcons.propTypes = {
  size: PropTypes.string,
};

SocialIcons.defaultProps = {
  size: "3x",
};
