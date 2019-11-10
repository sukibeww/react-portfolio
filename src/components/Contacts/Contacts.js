import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopContacts from './DesktopContacts';
import TabletContacts from './TabletContacts';
import MobileContacts from './MobileContacts';

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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopContacts/>}
      {(!isBigScreen && isTablet && !isMobile) && <TabletContacts/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileContacts/>}
    </>
  )
}

export default Footer;
