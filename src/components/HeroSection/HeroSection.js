import React from 'react'
import MySwiper from '../Swiper/Swiper'
import {useSpring, animated} from 'react-spring';

const HeroSection = () => {
  const bodyAnimation = useSpring({
    config:{
      duration: 800
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  return(
    <animated.div style={bodyAnimation}>
      <MySwiper/>
    </animated.div>
  )
}

export default HeroSection;
