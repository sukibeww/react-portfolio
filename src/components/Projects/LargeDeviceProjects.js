import React from 'react';
import styled from 'styled-components';
import LargeDeviceProjectCard from './LargeDeviceProjectCard';

const LargeDeviceProjects = () =>{

  const ProjectGrid = styled.div`
  display: grid;
  margin-left: 20vw;
  margin-top: 5vh;
  margin-right: 20vw;
  width: 60vw;
  grid-template-columns: 1fr;
  grid-row-gap: 10vh;
  grid-auto-rows: max-content;
`

  return(
    <>
      <ProjectGrid>
        <LargeDeviceProjectCard projectName="My Portfolio" image={require("../../images/react-project.svg")}></LargeDeviceProjectCard>
        <LargeDeviceProjectCard projectName="Home Grown Local" image={require("../../images/rails-project.svg")}></LargeDeviceProjectCard>
        <LargeDeviceProjectCard projectName="Where is the ISS?" image={require("../../images/node-project.svg")}></LargeDeviceProjectCard>
      </ProjectGrid>
    </>
  )
}

export default LargeDeviceProjects;