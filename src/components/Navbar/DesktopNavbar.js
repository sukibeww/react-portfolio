import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';
import {Link} from 'react-router-dom'

const DesktopWrapper = styled.div`
  padding: 1vh 10vw;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8vh;
  background-color: #FFFFFF;
  margin-bottom: 1vh;
  -webkit-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -moz-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`


const DesktopNav = () => {
  return(
    <>
      <DesktopWrapper>
        <Link to="/">
          <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
            height: "8vh"
          }}></img>
        </Link>
        <StyledLinks>
          <StyledLink>
            <Link to="/">
              <strong>Home</strong>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="/about-me">
              <strong>About me</strong>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="/projects">
              <strong>Projects</strong>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="/contacts">
              <strong>Contacts</strong>
            </Link>
          </StyledLink>
        </StyledLinks>
      </DesktopWrapper>
    </>
  )
}

export default DesktopNav;