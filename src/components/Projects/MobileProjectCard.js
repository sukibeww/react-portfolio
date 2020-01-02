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

const MobileProjectCard = (props) =>{
  const [state, changestate] = useState(false);
  const MobileCardWrapper = useSpring({
    height: "auto",
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
    marginBottom: "1vh",
    marginRight: "7vw",
    alignSelf: "flex-end"
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
        <animated.h3 style={CallToAction} onTouchEnd={()=>{changestate(prevState => !prevState)}}>{state ? "Collapse" : "Expand"}</animated.h3>
      </animated.div>
    </>
  )
}

export default MobileProjectCard;