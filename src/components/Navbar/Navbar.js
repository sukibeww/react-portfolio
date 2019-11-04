import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

const DesktopWrapper = styled.div`
  padding: 3vh 10vw;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8vh;
  background-color: #FFFFFF;
  margin-bottom: 1vh;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
`

const UltrawideWrapper = styled.div`
  padding: 3vh 20vw;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8vh;
  background-color: #FFFFFF;
  margin-bottom: 1vh;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
`

const MobileWrapper = styled.div`
  padding: 3vh 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 84vw;
  height: 5vh;
  background-color: #FFFFFF;
  margin-bottom: 2vh;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
`

const StyledLinks = styled.ul`
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const StyledLink = styled.li`
  list-style: none;
  color:  #373737;
  font-size: 1.3rem;
  margin-left: 3vw;
  font-family: 'Nunito', sans-serif;
  transition: all 0.1s;
  cursor: pointer;
  &:hover{
    transition: all 0.5s;
    color: #3000FF;
    -webkit-box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
    -moz-box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
    box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
  }
  &:active{
    color: rgba(95,58,255,1);
  }
`

const MobileNav = () => {
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
          width: "2rem"
        }}>

        </img>
      </MobileWrapper>
    </>
  )
}

const DesktopNav = () => {
  return(
    <>
      <DesktopWrapper>
        <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
          height: "8vh"
        }}></img>
        <StyledLinks>
          <StyledLink>
            <strong>Home</strong>
          </StyledLink>
          <StyledLink>
            <strong>Skills</strong>
          </StyledLink>
          <StyledLink>
            <strong>Projects</strong>
          </StyledLink>
        </StyledLinks>
      </DesktopWrapper>
    </>
  )
}

const UltrawideNav = () => {
  return(
    <>
      <UltrawideWrapper>
        <img src={require("../../images/logo-dark.svg")} alt="logo"></img>
        <StyledLinks>
          <StyledLink>
            <strong>Home</strong>
          </StyledLink>
          <StyledLink>
            <strong>Skills</strong>
          </StyledLink>
          <StyledLink>
            <strong>Projects</strong>
          </StyledLink>
        </StyledLinks>
      </UltrawideWrapper>
    </>
  )
}

const Navbar = () => {
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
 )
 const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 799 }
  )
  // diagnosis logging
  // console.log(`isBigScreen: ${isBigScreen}`);
  // console.log(`isDesktopOrLaptop: ${isDesktopOrLaptop}`);
  // console.log(`isMobile: ${isMobile}`);
  // console.log((isBigScreen && !isDesktopOrLaptop && !isMobile));
  // console.log((isDesktopOrLaptop && !isBigScreen && !isMobile));
  // console.log((isMobile && !isDesktopOrLaptop && !isBigScreen));
  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <UltrawideNav/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <DesktopNav/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileNav/>}
    </>
  )
}

export default Navbar;
