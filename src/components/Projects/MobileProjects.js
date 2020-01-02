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
        <MobileProjectCard 
        projectName="AirCamper Fire Ban" 
        image={require("../../images/graphql-project.svg")}
        details={"This application aims to provide a formatted information (JSON) regarding Fire ban in Australia provided by the government of every states for mobile application called AirCamper."}
        link="https://github.com/sukibeww/aircamp-fireban-graphql"
        ></MobileProjectCard>
        <MobileProjectCard 
        projectName="My Reading list" 
        image={require("../../images/graphql-project.svg")}
        details={"I did this project out of my own interest. I saw a video on youtube that showcased GraphQL and its benefit and usecases. It intrigued me and I convinced myself to create a simple application that covers the whole CRUD operation just to familiarize myself with this amazing technology. So I did."}
        link="https://github.com/sukibeww/graphql-frontend"
        ></MobileProjectCard>
        <MobileProjectCard 
        projectName="My Portfolio" 
        image={require("../../images/react-project.svg")}
        details={"This main objective of this project is to familiarize myself with React, This is the first ever solo React application that I will utilize as a portfolio to showcase my capability. I also used this website to experiment with experimental stuff and a library that I find interesting."}
        link="https://github.com/sukibeww/react-portfolio"
        ></MobileProjectCard>
        <MobileProjectCard 
        projectName="BlackJack" 
        image={require("../../images/node-project.svg")}
        details={"This is a pair programming challange from CoderAcademy, the objective is to replicate the game Blackjack in terminal. I challanged myself to avoid using Javascript Class and completely use Javascript object to model the whole game."}
        link="https://github.com/sukibeww/BlackJack-Terminal-Application"
        ></MobileProjectCard>
        <MobileProjectCard 
        projectName="Where is the ISS?" 
        image={require("../../images/node-project.svg")}
        details={"'This is one of the 3 project a day challange' from CoderAcademy to familiarize Node.js that I really like. In this project I had to hit an API that provide the information to the location of the International Space Station (ISS)."}
        link="https://github.com/sukibeww/whereISS"
        ></MobileProjectCard>
        <MobileProjectCard 
        projectName="Home Grown Local" 
        image={require("../../images/rails-project.svg")}
        details={"This is a group project from CoderAcademy Bootcamp, made with ruby and rails. We are required to create a two sided market place and we decided to create an online farmer's market."}
        link="https://github.com/sukibeww/home-grown-local"
        ></MobileProjectCard>
      </ProjectGrid>
    </>
  )
}

export default MobileProjects;