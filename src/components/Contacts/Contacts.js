import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopContacts from './DesktopContacts';
import TabletContacts from './TabletContacts';
import MobileContacts from './MobileContacts';
import {useSpring , animated} from 'react-spring';

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
        {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopContacts/>}
        {(!isBigScreen && isTablet && !isMobile) && <TabletContacts/>}
        {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileContacts/>}
      </animated.div>
      
    </>
  )
}

export default Footer;
