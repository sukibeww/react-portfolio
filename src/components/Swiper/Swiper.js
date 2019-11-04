import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import { useMediaQuery } from 'react-responsive'

const FirstSectionContainer = styled.div`
  background-image: url(${require("../../images/swiperlanding.svg")});
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  object-fit: cover;
`

const SecondSectionContainer = styled.div`
  background-image: url(${require("../../images/mobile-friendly-light.svg")});
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  object-fit: cover;
`

const ThirdSectionContainer = styled.div`
  background-image: url(${require("../../images/github-desktop.svg")});
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  object-fit: cover;
  cursor: pointer;
`


const MobileSectionContainer = styled.div`
  background-image: url(${require("../../images/mobile-landing.svg")});
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  object-fit: cover;
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
            </MobileSectionContainer>
          </div>
          <div>
            <MobileSectionContainer>
            </MobileSectionContainer>
          </div>
          <div>
            <MobileSectionContainer>
            </MobileSectionContainer>
          </div>
        </Swiper>
      </SwiperWrapper>
    </>
  )
}

const DesktopSwiper = () => {
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
            <FirstSectionContainer background="../../images/kristina-flour--VOQzKmWWq4-unsplash.jpg">
            </FirstSectionContainer>
          </div>
          <div>
            <SecondSectionContainer>
            </SecondSectionContainer>
          </div>
          <div>
            <a href="https://github.com/sukibeww/react-portfolio">
              <ThirdSectionContainer>
              </ThirdSectionContainer>
            </a>
          </div>
        </Swiper>
      </SwiperWrapper>
    </>
  )
}

const MySwiper = () =>{
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
  )
  const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 799 }
  )

  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopSwiper/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <DesktopSwiper/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileSwiper/>}
    </>
  )
}

export default MySwiper;