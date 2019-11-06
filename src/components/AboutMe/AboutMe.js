import React from 'react';
import { useMediaQuery } from 'react-responsive'

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
    </>
  )
}

export default AboutMe;