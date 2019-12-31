import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectGrid = styled.div`
  display: grid;
  margin-left: 15vw;
  margin-top: 10vh;
  margin-right: 15vw;
  margin-bottom: 20vh;
  width: 70vw;
  grid-template-columns: 19vw 19vw 19vw;
  grid-column-gap: 5vw;
  grid-auto-rows: max-content;
  grid-row-gap: 15vh;
`

const DesktopProjects = () =>{

  return(
    <>
      <ProjectGrid>
        <ProjectCard projectName="My Portfolio" image={require("../../images/react-project.svg")} description={"This website that you"}></ProjectCard>
        <ProjectCard projectName="My Reading list" image={require("../../images/graphql-project.svg")}></ProjectCard>
        <ProjectCard projectName="Where is the ISS?" image={require("../../images/node-project.svg")}></ProjectCard>
      </ProjectGrid>
    </>
  )
}

export default DesktopProjects;