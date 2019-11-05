import React, {useState} from 'react';
import styled from 'styled-components';
// import { NavMode } from '../../contexts/navContext';
import {useSpring , animated } from 'react-spring';

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
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
`

const NavOption = styled.div`
  height: 7vh;
  width: 50vw;
  background-color: #5F3AFF;
  color: #FFFFFF;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 3vh;
  border: solid 3px #5F3AFF;
  transition: all 0.5s;
  &:hover{
    color: #5F3AFF;
    background-color: #FFFFFF;
  }
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

  return(
    <>
      <MobileWrapper>
        <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
          height: "3rem",
          width: "3rem"
        }}>

        </img>
        <img src={require("../../images/burger.svg")} alt="burgermenu" style={{
          height: "2rem",
          width: "2rem",
          cursor: "pointer"
        }}
        onClick={() => toggle(!navMode)}
        >
        </img>
      </MobileWrapper>
      <animated.div style={fullNavAnimation}>
        <NavOption>Home</NavOption>
        <NavOption>Projects</NavOption>
        <NavOption>Skills</NavOption>
      </animated.div>
    </>
  )
}

export default MobileNav;