import React from 'react';
import { useMediaQuery } from 'react-responsive'
import DesktopSwiper from './DesktopSwiper';
import MobileSwiper from './MobileSwiper';

const MySwiper = () =>{
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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <DesktopSwiper/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <DesktopSwiper/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileSwiper/>}
    </>
  )
}

export default MySwiper;