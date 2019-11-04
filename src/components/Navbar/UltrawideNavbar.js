import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledLinks from './StyledLinks';

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

export default UltrawideNav;