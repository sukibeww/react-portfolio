import React from 'react';
import styled from 'styled-components';
import MobileProjectCard from './MobileProjectCard';

const ProjectGrid = styled.div`
  display: grid;
  margin-left: 10vw;
  margin-top: 5vh;
  margin-right: 10vw;
  width: 80vw;
  grid-template-columns: 1fr;
  grid-row-gap: 10vh;
  grid-auto-rows: max-content;
`

const MobileProjects = () =>{

  return(
    <>
      <ProjectGrid>
        <MobileProjectCard projectName="My Portfolio" image={require("../../images/react-project.svg")}></MobileProjectCard>
        <MobileProjectCard projectName="Home Grown Local" image={require("../../images/rails-project.svg")}></MobileProjectCard>
        <MobileProjectCard projectName="Where is the ISS?" image={require("../../images/node-project.svg")}></MobileProjectCard>
      </ProjectGrid>
    </>
  )
}

export default MobileProjects;