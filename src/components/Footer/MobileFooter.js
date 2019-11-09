import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const FooterWrapper = styled.div`
  margin-top: 20vh;
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
  margin-left: 10vw;
  margin-right: 10vw;
  justify-content: space-between;
  align-items: flex-start;
`

const SocialMediaLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialMediaLink = styled.img`
  width: 5vh;
  height: 5vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`

const NavigationLink = styled.h1`
  padding-top: 2vh;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  opacity: 0.5;
  font-weight: 800;
  &:hover {
    opacity: 1;
  }
`

const MobileFooter = () => {

  return(
    <>
      <FooterWrapper background={require("../../images/mobile-footer.svg")}>
        <FooterNavigationWrapper>
          <SocialMediaLinkWrapper>
            <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
            <SocialMediaLink src={require("../../images/linkedin.svg")}></SocialMediaLink>
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
          <Link style={{textDecoration: "none"}} to="/contact">
            <NavigationLink>Contact</NavigationLink>
          </Link>
        </FooterNavigationWrapper>
      </FooterWrapper>
    </>
  )
}

export default MobileFooter;