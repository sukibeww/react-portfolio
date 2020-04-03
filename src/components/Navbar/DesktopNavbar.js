import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';
import {Link} from 'react-router-dom'

const DesktopWrapper = styled.div`
  padding: 3vh 0vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: min-content;
  background-color: #3F3D56;
  border-bottom-left-radius: 10px; 
  border-bottom-right-radius: 10px;
  margin-bottom: 1vh;
  -webkit-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -moz-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const NavWrapper = styled.div`
  width: 100%; 
`


const DesktopNav = () => {
  return(
    <>
      <NavWrapper>
        <DesktopWrapper>
          <Link to="/">
            <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
              height: "8vh", 
              marginLeft: '2vw'
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
      </NavWrapper>
    </>
  )
}

export default DesktopNav;