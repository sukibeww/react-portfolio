import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';
import {Link} from 'react-router-dom';

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
              <strong>Home</strong>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="/projects">
              <strong>Skills</strong>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="/skills">
              <strong>Projects</strong>
            </Link>
          </StyledLink>
        </StyledLinks>
      </UltrawideWrapper>
    </>
  )
}

export default UltrawideNav;