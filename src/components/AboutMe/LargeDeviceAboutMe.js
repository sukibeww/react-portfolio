import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 15vw;
  height: 80vh;
  width: 70vw;
  background-image: url(${require("../../images/aboutme-frame.svg")});
  background-repeat: no-repeat;
  background-position: 75% 25%;
  padding-right: 15vw;
  padding-top: 5vh;
`

const AboutMeText = styled.p`
  position: relative;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  text-align: right;
  width: 65vw;
  right: 2vw;
  top: 2vw;
  margin: 0;
  line-height: 1.5;
  font-weight: bold;
`

const AboutMeSVG = styled.img`
  align-self: flex-start;
`

const AboutMeHeading = styled.h1`
  position: relative;
  right: 2vw;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #373737;
  font-size: 3.5rem;
  font-weight: bold;
  -webkit-text-shadow: 0px 4px 4px rgba(214,214,214,1);
  -moz-text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  text-shadow: 0px 4px 4px  rgba(214,214,214,1);
`

const Emphasize = styled.span`
  color: #5F3AFF;
`

const LargeDeviceAboutMe = () =>{
  return(
    <>
      <AboutMeWrapper>
        <AboutMeHeading>About me</AboutMeHeading>
        <AboutMeText>
          Hi! My name is <Emphasize>Suki</Emphasize>, an aspiring web developer based in <Emphasize>Melbourne, Australia</Emphasize>. I build and design responsive and functioning web application. I'm finishing up my coding bootcamp soon and currently looking for an <Emphasize>entry level web developer</Emphasize> position to kickstart my career as a developer. If you have an interesting project and want to collaborate with me feel free to <Emphasize>contact me</Emphasize> and we can talk it over a cup of coffee <span role="img" aria-label="coffee">☕</span>.
        </AboutMeText>
        <AboutMeSVG src={require("../../images/about-me.svg")} alt="about-me"/>
      </AboutMeWrapper>
    </>
  )
}

export default LargeDeviceAboutMe;