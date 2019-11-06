import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25vw;
  margin-left: 25vw;
  background-image: url(${require("../../images/aboutme-frame.svg")});
  background-repeat: no-repeat;
  background-position: 75% 25%;
`

const AboutMeText = styled.p`
  position: relative;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  text-align: right;
  width: 35vw;
  right: 7vw;
  line-height: 1.5;
  font-weight: bold;
`

const AboutMeSVG = styled.img`
  align-self: flex-start;
`

const AboutMeHeading = styled.h1`
  width: 50vw;
  position: relative;
  bottom: 2vh;
  margin-bottom: 0;
  padding-left: 8vw;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #373737;
  font-size: 3.5rem;
  font-weight: bold;
  margin-right: 25vw;
  margin-left: 25vw;
  -webkit-text-shadow: 0px 4px 4px rgba(214,214,214,1);
  -moz-text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  text-shadow: 0px 4px 4px  rgba(214,214,214,1);
`

const DesktopAboutMe = () =>{
  return(
    <>
      <AboutMeWrapper>
        <AboutMeHeading>About me</AboutMeHeading>
        <AboutMeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborum.
        </AboutMeText>
        <AboutMeSVG src={require("../../images/about-me.svg")} alt="about-me"/>
      </AboutMeWrapper>
    </>
  )
}

export default DesktopAboutMe;