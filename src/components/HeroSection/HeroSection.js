import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background: repeating-linear-gradient(45deg, rgb(249, 249, 249) 0px, rgb(249, 249, 249) 109px,rgb(234, 234, 234) 109px, rgb(234, 234, 234) 218px,rgb(242, 242, 242) 218px, rgb(242, 242, 242) 327px, #C6B9FF 327px, #C6B9FF 436px);
  height: 80vh;
  width: 100vw;
`

const HeroSection = () => { 
  return(
    <>
      <SectionContainer/>
    </>
  )
}

export default HeroSection;
