import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const FooterWrapper = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 27vh;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`

const FooterNavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2vh;
  margin-left: 15vw;
  margin-right: 15vw;
  justify-content: space-between;
  align-items: flex-start;
`

const SocialMediaLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialMediaLink = styled.img`
  width: 4vw;
  height: 4vw;
  margin-top: 2vh;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`

const NavigationLink = styled.h1`
  padding-top: 2vh;
  font-family: "Nunito", sans-serif;
  font-size: 1.5em;
  color: #FFFFFF;
  opacity: 0.5;
  font-weight: 800;
  &:hover {
    opacity: 1;
  }
`

const BottomSection = styled.div`
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;

`

const BottomText = styled.p`
  font-family: "Nunito",sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  opacity: 0.5;
  margin-right: 2vw;
  margin-bottom: 0;
  text-align: right;
`

const TabletFooter = () => {

  return(
    <>
      <FooterWrapper background={require("../../images/tablet-footer.svg")}>
        <FooterNavigationWrapper>
          <SocialMediaLinkWrapper>
            <a href="https://github.com/sukibeww">
              <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
            </a>
            <a href="https://www.linkedin.com/in/sukianto-suteja-85b379154/">
              <SocialMediaLink src={require("../../images/linkedin.svg")}></SocialMediaLink>
            </a>
          </SocialMediaLinkWrapper>
          <Link style={{textDecoration: "none"}} to="/">
            <NavigationLink>Home</NavigationLink>
          </Link>
          <Link style={{textDecoration: "none"}} to="/about-me">
            <NavigationLink>About</NavigationLink>
          </Link>
          <Link style={{textDecoration: "none"}} to="/projects">
            <NavigationLink>Projects</NavigationLink>
          </Link>
          <Link style={{textDecoration: "none"}} to="/contacts">
            <NavigationLink>Contact</NavigationLink>
          </Link>
        </FooterNavigationWrapper>
        <BottomSection>
          <BottomText>
            Made with love and coffee <span role="img" aria-label="coffee">☕</span> <br/>
            © 2019 Sukianto Suteja. All rights resevered.
          </BottomText>
        </BottomSection>
      </FooterWrapper>
    </>
  )
}

export default TabletFooter;