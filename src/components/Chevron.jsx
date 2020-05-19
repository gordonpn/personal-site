import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  arrow: {
    display: "block",
    top: "100%",
    width: "40%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
    height: "170%",
    animationName: "$bounceAnimation",
    animationDuration: "4s",
    animationIterationCount: "infinite",
    animationTimingFunction: "cubic-bezier(0.280, 0.840, 0.420, 1)",
  },
  "@keyframes bounceAnimation": {
    "0%": {
      transform: "scale(1,1) translateY(0)",
    },
    "10%": {
      transform: "scale(1.1,.9) translateY(0)",
    },
    "30%": {
      transform: "scale(.9,1.1) translateY(-20px)",
    },
    "50%": {
      transform: "scale(1.05,.95) translateY(0)",
    },
    "57%": {
      transform: "scale(1,1) translateY(-7px)",
    },
    "64%": {
      transform: "scale(1,1) translateY(0)",
    },
    "100%": {
      transform: "scale(1,1) translateY(0)",
    },
  },
});

export default function Chevron() {
  const classes = useStyles();
  return (
    <>
      <FontAwesomeIcon
        icon={faChevronDown}
        size="3x"
        className={classes.arrow}
      />
    </>
  );
}
