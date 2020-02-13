import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects'
import LargeDeviceProject from './LargeDeviceProjects';
import {useSpring , animated} from 'react-spring';


const Projects = () =>{
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
    <>
      <animated.div style={bodyAnimation}>
        {(isBigScreen && !isDesktopOrLaptop && !isMobile) ? <DesktopProjects/> : null}
        {(!isBigScreen && isDesktopOrLaptop && !isMobile) ? <LargeDeviceProject/> : null}
        {(!isBigScreen && isDesktopOrLaptop && isMobile) ? <MobileProjects/> : null}
      </animated.div>
      
    </>
  )
}

export default Projects;