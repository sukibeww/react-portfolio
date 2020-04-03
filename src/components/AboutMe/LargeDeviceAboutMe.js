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
  background-image: url(${require("../../images/aboutme-mobile-frame.svg")});
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
  right: 7vw;
  top: 2vw;
  margin: 0;
  line-height: 1.5;
  font-weight: bold;
`

const AboutMeHeading = styled.h1`
  position: relative;
  right: 7vw;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #373737;
  font-size: 3.5rem;
  font-weight: bold;
  -webkit-text-shadow: 0px 4px 4px rgba(214,214,214,1);
  -moz-text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  margin: 0;
  margin-top: 5vh;
`

const Splitter = styled.img`
  width: 50vw;
`

const Endline = styled.img`
  width: 30vw;
`

const EmphasizeLink = styled.a`
  color: #5F3AFF;
  text-decoration: underline;
`

const LargeDeviceAboutMe = () =>{
  return(
    <>
      <AboutMeWrapper>
        <AboutMeHeading>About me</AboutMeHeading>
        <Splitter src={require("../../images/about-me-splitter.svg")}></Splitter>
        <AboutMeText>
          Hi! My name is Suki, a web developer based in Indonesia, Jakarta. I build and design responsive and functioning web application. I'm finishing up my coding bootcamp soon and currently looking for a web developer position to kickstart my career as a developer. If you have an interesting project and want to collaborate with me feel free to <EmphasizeLink href="/contacts">contact me</EmphasizeLink> and we can talk it over a cup of coffee <span role="img" aria-label="coffee">☕</span>.
        </AboutMeText> 
        <Endline src={require("../../images/about-me-endline.svg")}></Endline>
      </AboutMeWrapper>
    </>
  )
}

export default LargeDeviceAboutMe;