import React from 'react'
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import {Link} from 'react-router-dom';

const FooterWrapper = styled.div`
  margin-top: 30vh;
  width: 100vw;
  height: 35vh;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`

const SocialMediaLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialMediaLink = styled.img`
  width: 3vw;
  height: 3vw;
  margin-top: 5vh;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`

const NavigationLink = styled.h1`
  padding-top: 2vh;
  font-family: "Nunito", sans-serif;
  font-size: 2em;
  color: #FFFFFF;
  opacity: 0.5;
  font-weight: 800;
  &:hover {
    opacity: 1;
  }
`

const Footer = () => {
  const FooterNavigationWrapper = useSpring({
    display: "flex",
    flexDirection: "row",
    paddingTop: "2vh",
    marginLeft: "20vw",
    marginRight: "20vw",
    justifyContent: "space-between",
    alignItems: "flex-start"
  })

  return(
    <>
      <FooterWrapper background={require("../../images/footer2.svg")}>
        <animated.div style={FooterNavigationWrapper}>
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
        </animated.div>
      </FooterWrapper>
    </>
  )
}

export default Footer;