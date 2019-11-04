import React from 'react';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  padding: 3vh 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 84vw;
  height: 5vh;
  background-color: #FFFFFF;
  margin-bottom: 2vh;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
  box-shadow: 0px 3px 5px 0px rgba(168,156,255,1);
`

const MobileNav = () => {
  return(
    <>
      <MobileWrapper>
        <img src={require("../../images/logo-dark.svg")} alt="logo" style={{
          height: "3rem",
          width: "3rem"
        }}>

        </img>
        <img src={require("../../images/burger.svg")} alt="burgermenu" style={{
          height: "2rem",
          width: "2rem",
          cursor: "pointer"
        }}>
        </img>
      </MobileWrapper>
    </>
  )
}

export default MobileNav;