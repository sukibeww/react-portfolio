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
  min-height: 70vh;
`

const DesktopProjects = () =>{

  return(
    <>
      <ProjectGrid>
      <ProjectCard 
        projectName="Code:Block" 
        image={require("../../images/gatsby-project.svg")}
        details={"This is a passion project of mine, I want to create a personal blog to document my journey and experience in web development world. So I created Code:Block. A personal blog that I actively maintain and develop"}
        link="https://github.com/sukibeww/code-block"
        ></ProjectCard>
        <ProjectCard 
        projectName="AirCamper Fire Ban" 
        image={require("../../images/graphql-project.svg")}
        details={"This application aims to provide a formatted information (JSON) regarding Fire ban in Australia provided by the government of every states for mobile application called AirCamper."}
        link="https://github.com/sukibeww/aircamp-fireban-graphql"
        ></ProjectCard>
        <ProjectCard 
        projectName="My Reading list" 
        image={require("../../images/graphql-project.svg")}
        details={"I did this project out of my own interest. I saw a video on youtube that showcased GraphQL and its benefit and usecases. It intrigued me and I convinced myself to create a simple application that covers the whole CRUD operation just to familiarize myself with this amazing technology. So I did."}
        link="https://github.com/sukibeww/graphql-frontend"
        ></ProjectCard>
        <ProjectCard 
        projectName="My Portfolio" 
        image={require("../../images/react-project.svg")}
        details={"This main objective of this project is to familiarize myself with React, This is the first ever solo React application that I will utilize as a portfolio to showcase my capability. I also used this website to experiment with experimental stuff and a library that I find interesting."}
        link="https://github.com/sukibeww/react-portfolio"
        ></ProjectCard>
        <ProjectCard 
        projectName="BlackJack" 
        image={require("../../images/node-project.svg")}
        details={"This is a pair programming challange from CoderAcademy, the objective is to replicate the game Blackjack in terminal. I challanged myself to avoid using Javascript Class and completely use Javascript object to model the whole game."}
        link="https://github.com/sukibeww/BlackJack-Terminal-Application"
        ></ProjectCard>
        <ProjectCard 
        projectName="Where is the ISS?" 
        image={require("../../images/node-project.svg")}
        details={"'This is one of the 3 project a day challange' from CoderAcademy to familiarize Node.js that I really like. In this project I had to hit an API that provide the information to the location of the International Space Station (ISS)."}
        link="https://github.com/sukibeww/whereISS"
        ></ProjectCard>
        <ProjectCard 
        projectName="Home Grown Local" 
        image={require("../../images/rails-project.svg")}
        details={"This is a group project from CoderAcademy Bootcamp, made with ruby and rails. We are required to create a two sided market place and we decided to create an online farmer's market."}
        link="https://github.com/sukibeww/home-grown-local"
        ></ProjectCard>
      </ProjectGrid>
    </>
  )
}

export default DesktopProjects;