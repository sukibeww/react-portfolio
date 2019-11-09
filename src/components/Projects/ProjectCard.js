import React ,{useState} from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const ProjectImage = styled.img`
  z-index: 98;
  border-radius: 15px;
  object-fit: cover;
  width: 19vw;
`

const ProjectCard = (props) =>{
  const [state, changestate] = useState({
    hovered: false,
    clicked: false
  });

  const CallToAction = useSpring({
    fontSize: "1em",
    fontFamily: "Nunito, sans-serif",
    color: "#767676",
    margin: 0,
    width: "inherit",
    textAlign: "right",
    marginRight: "2vw",
    display: state.clicked ? "none" : "block"
  })

  const ProjectTitle = useSpring({
    fontSize: "1.5em",
    fontFamily: "Nunito, sans-serif",
    color: "#FFFFFF",
    zIndex: 99,
    marginRight: "2vw",
    marginTop: 0,
    marginBottom: "0",
    height: state.hovered ? "32vh" : "20vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  })


  const CardShadowAnimation = useSpring({
    backgroundColor: "#373737",
    borderRadius: "15px",
    position: "absolute",
    width: state.hovered ? "21vw": "16vw",
    height: "auto",
    top: state.hovered ? "-3%" : "40%",
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
        maxHeight: state.clicked ? "100vh" : "0vh",
        opacity: state.clicked ? 1 : 0,
        width: "auto",
        marginTop: 0,
        paddingLeft: "1vw",
        paddingRight: "1vw",
        overflowY: "hidden",
        textAlign: "justify"
      },
    )

  const ProjectCardWrapperAnimation = useSpring({
    height: state.clicked ? "60vh" : "25vh",
    width: "19vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative"
  })

  return(
    <>
      <animated.div
      style={ProjectCardWrapperAnimation}
      onMouseEnter={() => {
        changestate({
          hovered: true
        })
      }}
      onMouseLeave={() =>{
        changestate({
          hovered: false,
          clicked: false
        })
      }}
      onClick={(e) =>{
        changestate((prevState) => {
          return {
            hovered: true,
            clicked: !prevState.clicked
          }
        })
      }}
      >
        <ProjectImage src={props.image} alt={props.projectName}></ProjectImage>
        <animated.div style={CardShadowAnimation}>
          <animated.h1 style={ProjectTitle}>{props.projectName}</animated.h1>
          <animated.h3 style={CallToAction}>Click for details</animated.h3>
          <animated.p style={ProjectDetailAnimation}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit nisi, ut dictum dolor cursus in. Morbi eu mi est. Integer egestas sem a turpis euismod, ut maximus eros auctor. Aenean sed sodales ipsum. Ut pretium dictum orci, ac malesuada ipsum condimentum at. Morbi bibendum magna sed dignissim volutpat. Praesent sed ipsum tristique, interdum augue id, ornare nibh. Duis dapibus tristique augue sit amet scelerisque. Etiam turpis turpis, fringilla eu tempor at, malesuada ut mi. Praesent pellentesque ac orci vitae malesuada.
          </animated.p>
        </animated.div>
      </animated.div>
    </>
  )
}

export default ProjectCard;