import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5vh;
  margin-right: 5vw;
  margin-left: 5vw;
  background-image: url(${require("../../images/aboutme-mobile-frame.svg")});
  background-repeat: no-repeat;
  background-position: 75% 25%;
  height: 85vh;
`

const AboutMeText = styled.p`
  position: relative;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  text-align: right;
  width: 70vw;
  line-height: 1.5;
  font-weight: bold;
  align-self: flex-start;
`

const AboutMeHeading = styled.h1`
  margin-bottom: 5vh;
  width: 70vw;
  position: relative;
  margin-bottom: 0;
  padding-left: 12vw;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #373737;
  font-size: 2.3em;
  font-weight: bold;
  margin-left: 5vw;
  -webkit-text-shadow: 0px 4px 4px rgba(214,214,214,1);
  -moz-text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  align-self: flex-start;
`

const MobileAboutMe = () =>{
  return(
    <>
      <AboutMeWrapper>
        <AboutMeHeading>About me</AboutMeHeading>
        <AboutMeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborum.
        </AboutMeText>
      </AboutMeWrapper>
    </>
  )
}

export default MobileAboutMe;