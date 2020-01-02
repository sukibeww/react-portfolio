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
  const isMobile = useMediaQuery(
    { maxWidth: 767 }
  )

  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) ? <DesktopProjects/> : null}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) ? <LargeDeviceProject/> : null}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) ? <MobileProjects/> : null}
    </>
  )
}

export default Projects;