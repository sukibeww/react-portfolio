import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

const SectionContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  object-fit: cover;
  display: flex;
  justify-content:center;
  align-items: center;
`

const SwiperWrapper = styled.div`
  width: 100vw;
`

const DesktopSwiper = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    },
  }
  return(
    <>
      <script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"></link>
      <SwiperWrapper>
        <Swiper {...params}>
          <div>
            <SectionContainer>
              <img src={require("../../images/swiperlanding.svg")} alt="landing"></img>
            </SectionContainer>
          </div>
          <div>
            <SectionContainer>
              <img src={require("../../images/mobile-friendly-light.svg")} alt="mobile-landing" ></img>
            </SectionContainer>
          </div>
          <div>
            <a href="https://github.com/sukibeww">
              <SectionContainer>
                <img src={require("../../images/github-desktop.svg")} alt="github-landing"></img>
              </SectionContainer>
            </a>
          </div>
        </Swiper>
      </SwiperWrapper>
    </>
  )
}

export default DesktopSwiper;
