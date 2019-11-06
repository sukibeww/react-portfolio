import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopAboutMe from './DesktopAboutMe';
import MobileAboutMe from './MobileAboutMe';
import LargeDeviceAboutMe from './LargeDeviceAboutMe';

const AboutMe = () =>{
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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopAboutMe/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <LargeDeviceAboutMe/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileAboutMe/>}
    </>
  )
}

export default AboutMe;