import React ,{useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';

const ProjectImage = styled.img`
  margin-top: 1vh;
  width: 75vw;
  border-radius: 10px;
  align-self: center;
`

const ProjectHeading = styled.h1`
  font-size: 1em;
  font-family: Nunito, "sans-serif";
  color: #FFFFFF;
  align-self: flex-end;
  margin-right: 7vw;
  margin-top: 1vh;
  margin-bottom: 0;
`

const CallToActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const SocialMediaLinkWrapper = styled.div`
  overflow: visible;
  margin-left: 7vw;
  width: 30px;
  position: relative;
  bottom: 1vh;
`

const SocialMediaLink = styled.img`
  width: 30px;
  height: 30px;
  opacity: 1;
`

const MobileProjectCard = (props) =>{
  const [state, changestate] = useState(false);
  const MobileCardWrapper = useSpring({
    width: "80vw",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#373737",
    marginRight: "0vw",
    marginLeft: "0vw"
  })

  const CallToAction = useSpring({
    fontSize: "0.7em",
    fontFamily: "Nunito, sans-serif",
    color: "#767676",
    marginTop: 0,
    marginRight: "7vw",
  })

  const ProjectDetailAnimation = useSpring(
    {
      config: {
        duration: 500
      },
      fontFamily: "Nunito, sans-serif",
      color: "#FFFFFF",
      backgroundColor:"#373737",
      fontSize: "0.8em",
      maxHeight: state ? "100vh" : "0vh",
      opacity: state ? 1 : 0,
      width: "auto",
      paddingLeft: "1vw",
      paddingRight: "1vw",
      paddingBottom: "2vh",
      overflowY: "hidden",
      textAlign: "justify",
      margin: "0 2vw"
    }
  )

  return(
    <>
      <animated.div style={MobileCardWrapper}>
        <ProjectImage src={props.image}></ProjectImage>
        <ProjectHeading>{props.projectName}</ProjectHeading>
        <animated.p style={ProjectDetailAnimation}>
          {props.details}
        </animated.p>
        <CallToActionWrapper>
          <a href={props.link}>
            <SocialMediaLinkWrapper>
              <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
            </SocialMediaLinkWrapper>
          </a>
          <animated.h3 style={CallToAction} onTouchEnd={()=>{changestate(prevState => !prevState)}}>{state ? "Collapse" : "Expand"}</animated.h3>
        </CallToActionWrapper>
      </animated.div>
    </>
  )
}

export default MobileProjectCard;