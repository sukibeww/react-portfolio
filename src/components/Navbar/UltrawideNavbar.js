import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';
import {Link} from 'react-router-dom';

const UltrawideWrapper = styled.div`
  padding: 1vh 20vw;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: min-content;
  background-color: #FFFFFF;
  margin-bottom: 1vh;
  -webkit-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -moz-box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const LinkText = styled.h1`
  font-size: 0.8em;
`

const UltrawideNav = () => {
  return(
    <>
      <UltrawideWrapper>
        <Link to="/">
          <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
            height: "8vh"
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
    </>
  )
}

export default UltrawideNav;