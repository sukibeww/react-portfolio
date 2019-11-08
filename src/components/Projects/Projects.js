import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects'


const Projects = () =>{
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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopProjects/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <DesktopProjects/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileProjects/>}
    </>
  )
}

export default Projects;