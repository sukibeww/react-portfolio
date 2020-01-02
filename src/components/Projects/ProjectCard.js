import React ,{useState} from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const ProjectImage = styled.img`
  z-index: 98;
  border-radius: 15px;
  object-fit: cover;
  width: 19vw;
`

const SocialMediaLinkWrapper = styled.div`
  overflow: visible;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const SocialMediaLink = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`

const ProjectCard = (props) =>{
  const [hovered, toggleHovered] = useState(false);
  const [clicked, toggleClicked] = useState(false);
  const CallToAction = useSpring({
    fontSize: "1em",
    fontFamily: "Nunito, sans-serif",
    color: "#767676",
    margin: 0,
    width: "inherit",
    textAlign: "right",
    marginRight: "2vw",
    display: clicked ? "none" : "block"
  })

  const ProjectTitle = useSpring({
    fontSize: "1.5em",
    fontFamily: "Nunito, sans-serif",
    color: "#FFFFFF",
    zIndex: 99,
    marginRight: "2vw",
    marginTop: 0,
    marginBottom: "0",
    height: hovered ? "32vh" : "20vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  })


  const CardShadowAnimation = useSpring({
    backgroundColor: "#373737",
    borderRadius: "15px",
    position: "absolute",
    width: hovered ? "21vw": "16vw",
    height: "auto",
    top: hovered ? "-3%" : "40%",
    right: "-5%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column"
  })

  const ProjectDetailAnimation = useSpring(
      {
        config: {
          duration: 500
        },
        fontFamily: "Nunito, sans-serif",
        color: "#FFFFFF",
        backgroundColor:"#373737",
        fontSize: "1em",
        maxHeight: clicked ? "100vh" : "0vh",
        opacity: clicked ? 1 : 0,
        width: "auto",
        marginTop: 0,
        paddingLeft: "1vw",
        paddingRight: "1vw",
        overflowY: "hidden",
        textAlign: "justify"
      },
    )

  const ProjectCardWrapperAnimation = useSpring({
    paddingTop: "1vh",
    height: clicked ? "40vh   " : "25vh",
    width: "19vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
  })

  return(
    <>
      <animated.div
      style={ProjectCardWrapperAnimation}
      onMouseEnter={() => {
        toggleHovered(true);
      }}
      onMouseLeave={() => {
        if(!clicked){
          toggleHovered(false);
        }
      }}
      onClick={(e) =>{
        toggleClicked((prevState) => !prevState);
      }}
      >
        <ProjectImage src={props.image} alt={props.projectName}></ProjectImage>
        <animated.div style={CardShadowAnimation}>
          <animated.h1 style={ProjectTitle}>{props.projectName}</animated.h1>
          <animated.h3 style={CallToAction}>Click for details</animated.h3>
          <animated.p style={ProjectDetailAnimation}>
            {props.details}
            <SocialMediaLinkWrapper>
              <a
              href={props.link}>
                <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
              </a>
            </SocialMediaLinkWrapper>
          </animated.p>
          
        </animated.div>
      </animated.div>
    </>
  )
}

export default ProjectCard;