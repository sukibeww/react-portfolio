import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects'
import LargeDeviceProject from './LargeDeviceProjects';


const Projects = () =>{
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
  )
  const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isTablet = useMediaQuery(
    { maxWidth: 800 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 500 }
  )

  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopProjects/>}
      {(!isBigScreen && isTablet && !isMobile) && <LargeDeviceProject/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileProjects/>}
    </>
  )
}

export default Projects;