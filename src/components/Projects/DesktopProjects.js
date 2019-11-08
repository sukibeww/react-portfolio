import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectGrid = styled.div`
  display: grid;
  margin-left: 15vw;
  margin-top: 5vh;
  margin-right: 15vw;
  width: 70vw;
  grid-template-columns: 19vw 19vw 19vw;
  grid-column-gap: 5vw;
  grid-auto-rows: max-content;
  grid-row-gap: 25vh;
`

const DesktopProjects = () =>{

  return(
    <>
      <ProjectGrid>
        <ProjectCard projectName="My Portfolio" image={require("../../images/react-project.svg")}></ProjectCard>
        <ProjectCard projectName="Home Grown Local" image={require("../../images/rails-project.svg")}></ProjectCard>
        <ProjectCard projectName="Where is the ISS?" image={require("../../images/node-project.svg")}></ProjectCard>
        <ProjectCard projectName="My Portfolio" image={require("../../images/react-project.svg")}></ProjectCard>
        <ProjectCard projectName="Home Grown Local" image={require("../../images/rails-project.svg")}></ProjectCard>
        <ProjectCard projectName="Where is the ISS?" image={require("../../images/node-project.svg")}></ProjectCard>
      </ProjectGrid>
    </>
  )
}

export default DesktopProjects;