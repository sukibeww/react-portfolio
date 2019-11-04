import React from 'react';
import { useMediaQuery } from 'react-responsive'
import DesktopNav from './DesktopNavbar';
import UltrawideNav from './UltrawideNavbar';
import MobileNav from './MobileNavbar';

const Navbar = () => {
  const isBigScreen = useMediaQuery(
    { minWidth: 1601 }
  )
  const isDesktopOrLaptop = useMediaQuery(
    { maxWidth: 1600 }
  )
  const isMobile = useMediaQuery(
    { maxWidth: 799 }
  )
  // diagnosis logging
  // console.log(`isBigScreen: ${isBigScreen}`);
  // console.log(`isDesktopOrLaptop: ${isDesktopOrLaptop}`);
  // console.log(`isMobile: ${isMobile}`);
  // console.log((isBigScreen && !isDesktopOrLaptop && !isMobile));
  // console.log((isDesktopOrLaptop && !isBigScreen && !isMobile));
  // console.log((isMobile && !isDesktopOrLaptop && !isBigScreen));
  return(
    <>
      {(isBigScreen && !isDesktopOrLaptop && !isMobile) && <UltrawideNav/>}
      {(!isBigScreen && isDesktopOrLaptop && !isMobile) && <DesktopNav/>}
      {(!isBigScreen && isDesktopOrLaptop && isMobile) && <MobileNav/>}
    </>
  )
}

export default Navbar;
