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
  min-height: 100vh;
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
  -webkit-text-shadow: 0px 4px 4px rgba(214,214,214,1);
  -moz-text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  text-shadow: 0px 4px 4px  rgba(214,214,214,1);
  align-self: flex-start;
`

const EmphasizeLink = styled.a`
  color: #5F3AFF;
  text-decoration: underline;
`

const Splitter = styled.img`
  width: 90vw;
`

const Endline = styled.img`
  width: 60vw;
`

const MobileAboutMe = () =>{
  return(
    <>
      <AboutMeWrapper>
        <AboutMeHeading>About me</AboutMeHeading>
        <Splitter src={require("../../images/about-me-splitter.svg")}></Splitter>
        <AboutMeText>
          Hi! My name is Suki, a web developer based in Melbourne, Australia. I build and design responsive and functioning web application. I'm finishing up my coding bootcamp soon and currently looking for a web developer position to kickstart my career as a developer. If you have an interesting project and want to collaborate with me feel free to <EmphasizeLink href="/contacts">contact me</EmphasizeLink> and we can talk it over a cup of coffee <span role="img" aria-label="coffee">☕</span>.
        </AboutMeText>
        <Endline src={require("../../images/about-me-endline.svg")}></Endline>
      </AboutMeWrapper>
    </>
  )
}

export default MobileAboutMe;