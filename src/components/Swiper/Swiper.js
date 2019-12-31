import React from 'react';
import { useMediaQuery } from 'react-responsive'
import DesktopSwiper from './DesktopSwiper';
import MobileSwiper from './MobileSwiper';
import LargeDeviceSwiper from './LargeDeviceSwiper'

const MySwiper = () =>{
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
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) ? <DesktopSwiper/> : null}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) ? <LargeDeviceSwiper/> : null}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) ? <MobileSwiper/> : null}
    </>
  )
}

export default MySwiper;