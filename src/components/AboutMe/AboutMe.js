import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopAboutMe from './DesktopAboutMe';
import MobileAboutMe from './MobileAboutMe';
import LargeDeviceAboutMe from './LargeDeviceAboutMe';
import {useSpring , animated} from 'react-spring';

const AboutMe = () =>{
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
  )
  const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 767 }
  )

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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopAboutMe/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <LargeDeviceAboutMe/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileAboutMe/>}
    </animated.div>
  )
}

export default AboutMe;