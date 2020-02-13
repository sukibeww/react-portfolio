import React, {useState} from 'react';
import styled from 'styled-components';
import {useSpring , animated } from 'react-spring';
import {Link} from 'react-router-dom';

const MobileWrapper = styled.div`
  top: 0;
  z-index: 99;
  position: sticky;
  padding: 3vh 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 84vw;
  height: 5vh;
  border-bottom-left-radius: 10px; 
  border-bottom-right-radius: 10px;
  background-color: #3F3D56;
  -webkit-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -moz-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const MobileNav = () => {
  const [navMode, toggle] = useState(false)
  const fullNavAnimation = useSpring({
    top: 0,
    zIndex: 98,
    position: "fixed",
    backgroundColor: "#373737",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: navMode ? "100vh" : "0vh",
    opacity: navMode ? 1 : 0
  })

  const navOptionAnimation = useSpring({
    height: navMode ? "7vh" : "0vh",
    display: navMode ? "flex" : "none",
    width: "50vw",
    backgroundColor: navMode ? "#FFFFFF" : "#373737",
    color: "#5F3AFF",
    fontSize: navMode? "1.3rem": "0rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "3vh",
    transition: "all 0.5s",
    fontFamily: "Nunito, sans-serif"
  })

  return(
    <>
      <MobileWrapper>
        <Link to="/">
          <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
            height: "3rem",
            width: "3rem"
          }}></img>
        </Link>
        <img src={require("../../images/burger-light.svg")} alt="burgermenu" style={{
          height: "2rem",
          width: "2rem",
          cursor: "pointer"
        }}
        onClick={() => toggle(!navMode)}
        >
        </img>
      </MobileWrapper>
      <animated.div style={fullNavAnimation} onClick={()=>toggle(!navMode)}>
        <Link to="/" style={{textDecoration: "none"}}>
          <animated.div style={navOptionAnimation} onClick={()=>toggle(!navMode)}><strong>Home</strong></animated.div>
        </Link>
        <Link to="/about-me" style={{textDecoration: "none"}}>
          <animated.div style={navOptionAnimation} onClick={()=>toggle(!navMode)}><strong>About Me</strong></animated.div>
        </Link>
        <Link to="/projects" style={{textDecoration: "none"}}>
          <animated.div style={navOptionAnimation} onClick={()=>toggle(!navMode)}><strong>Projects</strong></animated.div>
        </Link>
        <Link to="/contacts" style={{textDecoration: "none"}}>
          <animated.div style={navOptionAnimation} onClick={()=>toggle(!navMode)}><strong>Contacts</strong></animated.div>
        </Link>
      </animated.div>
    </>
  )
}

export default MobileNav;