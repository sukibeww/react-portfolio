import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';
import {Link} from 'react-router-dom';

const UltrawideWrapper = styled.div`
  padding: 1vh 0vw;
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

const LinkText = styled.h1`
  font-size: 0.8em;
`

const NavWrapper = styled.div`
  width: 80%; 
  margin: 0 10vw;
`

const UltrawideNav = () => {
  return(
    <>
      <NavWrapper> 
        <UltrawideWrapper>
          <Link to="/">
            <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
              height: "8vh",
              marginLeft: '2vw'
            }}></img>
          </Link>
          <StyledLinks>
            <StyledLink>
              <Link to="/">
                <LinkText>Home</LinkText>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="/about-me">
                <LinkText>About me</LinkText>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="/projects">
                <LinkText>Projects</LinkText>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="/contacts">
                <LinkText>Contacts</LinkText>
              </Link>
            </StyledLink>
          </StyledLinks>
        </UltrawideWrapper>
      </NavWrapper>
    </>
  )
}

export default UltrawideNav;