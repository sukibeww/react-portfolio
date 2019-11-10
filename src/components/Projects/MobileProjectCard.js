import React ,{useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';

const ProjectImage = styled.img`
  margin-top: 2vh;
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
    alignSelf: "flex-end",
    display: state ? "none" : "block"
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
      maxHeight: state ? "100vh" : "0vh",
      opacity: state ? 1 : 0,
      width: "auto",
      margin: state ? "4vw" : "0vw",
      paddingLeft: "1vw",
      paddingRight: "1vw",
      overflowY: "hidden",
      textAlign: "justify"
    }
  )

  return(
    <>
      <animated.div style={MobileCardWrapper} onTouchEnd={() => changestate((prevState) => !prevState)}>
        <ProjectImage src={props.image}></ProjectImage>
        <ProjectHeading>{props.projectName}</ProjectHeading>
        <animated.h3 style={CallToAction}>Click for details</animated.h3>
        <animated.p style={ProjectDetailAnimation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit nisi, ut dictum dolor cursus in. Morbi eu mi est. Integer egestas sem a turpis euismod, ut maximus eros auctor. Aenean sed sodales ipsum. Ut pretium dictum orci, ac malesuada ipsum condimentum at. Morbi bibendum magna sed dignissim volutpat. Praesent sed ipsum tristique, interdum augue id, ornare nibh. Duis dapibus tristique augue sit amet scelerisque. Etiam turpis turpis, fringilla eu tempor at, malesuada ut mi. Praesent pellentesque ac orci vitae malesuada.
        </animated.p>
      </animated.div>
    </>
  )
}

export default MobileProjectCard;