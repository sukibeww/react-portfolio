import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

const MobileSectionContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`

const SwiperWrapper = styled.div`
  width: 100vw;
`

const SwiperImage = styled.img`
  width: 50vw;
  min-height: 75vh;
`


const LargeDeviceSwiper = () =>{
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
            <MobileSectionContainer>
              <SwiperImage src={require("../../images/mobile-landing.svg")} alt="landing"></SwiperImage>
            </MobileSectionContainer>
          </div>
          <div>
            <MobileSectionContainer>
              <SwiperImage src={require("../../images/mobile-friendly-for-mobile.svg")} alt="landing"></SwiperImage>
            </MobileSectionContainer>
          </div>
          <div>
            <a href="https://github.com/sukibeww">
              <MobileSectionContainer>
                <SwiperImage src={require("../../images/github-for-mobile.svg")} alt="landing"></SwiperImage>
              </MobileSectionContainer>
            </a>
          </div>
        </Swiper>
      </SwiperWrapper>
    </>
  )
}

export default LargeDeviceSwiper;