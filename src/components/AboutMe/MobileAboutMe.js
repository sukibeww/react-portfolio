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
          Hi! My name is Suki, an aspiring web developer based in Melbourne, Australia. I build and design responsive and functioning web application. I'm finishing up my coding bootcamp soon and currently looking for an entry level web developer position to kickstart my career as a developer. If you want to work on an interesting project with me feel free to contact me and we can talk it over a cup of coffee <span role="img" aria-label="coffee">☕</span>.
        </AboutMeText>
      </AboutMeWrapper>
    </>
  )
}

export default MobileAboutMe;