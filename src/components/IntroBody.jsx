import React from 'react';
import {createUseStyles} from 'react-jss';
import Container from 'react-bootstrap/Container'
import './IntroBody.css'

const useStyles = createUseStyles({
  root: {
    background: 'linear-gradient(162deg,rgba(254,211,159,1) 0%,rgba(246,238,201,1) 67%)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    margin: 0,
    width: '100vw',
  },
  name: {
    fontFamily: 'Pacifico, cursive',
    fontSize: '4rem',
    left: '50%',
    letterSpacing: '-0.15rem',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
})

export const IntroBody = () => {
  const classes = useStyles()
  return (
    <Container fluid className={classes.root}>
      <p className={classes.name}>Gordon Pham-Nguyen</p>
    </Container>
  )
}
