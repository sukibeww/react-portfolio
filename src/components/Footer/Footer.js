import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopFooter from './DesktopFooter';
import TabletFooter from './TabletFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
  )
  const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isTablet = useMediaQuery(
    { maxWidth: 1025 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 500 }
  )


  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopFooter/>}
      {(!isBigScreen && isTablet && !isMobile) && <TabletFooter/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileFooter/>}
    </>
  )
}

export default Footer;
