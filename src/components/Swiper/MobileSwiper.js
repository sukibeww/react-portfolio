import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

const MobileSectionContainer = styled.div`
  background-image: url(${require("../../images/mobile-landing.svg")});
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  object-fit: cover;
  display: flex;
  margin-top: 2vh;
  justify-content:center;
  align-items: center;
`

const SwiperWrapper = styled.div`
  width: 100vw;
`


const MobileSwiper = () =>{
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 0
  }
  return(
    <>
      <script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"></link>
      <SwiperWrapper>
        <Swiper {...params}>
          <div>
            <MobileSectionContainer>
              <img src={require("../../images/mobile-landing.svg")} alt="landing"></img>
            </MobileSectionContainer>
          </div>
          <div>
            <MobileSectionContainer>
              <img src={require("../../images/mobile-friendly-for-mobile.svg")} alt="landing"></img>
            </MobileSectionContainer>
          </div>
          <div>
            <a href="https://github.com/sukibeww">
              <MobileSectionContainer>
                <img src={require("../../images/github-for-mobile.svg")} alt="landing"></img>
              </MobileSectionContainer>
            </a>
          </div>
        </Swiper>
      </SwiperWrapper>
    </>
  )
}

export default MobileSwiper;