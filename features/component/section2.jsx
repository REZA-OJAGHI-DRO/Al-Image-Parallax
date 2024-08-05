import React from 'react'
import ImgHover from '../../generalComponent/imgHover'
import img1 from "../../assets/features/section2/logo-1.png"
import img2 from "../../assets/features/section2/logo-2.png"
import img3 from "../../assets/features/section2/logo-3.png"
import img4 from "../../assets/features/section2/logo-4.png"
import img5 from "../../assets/features/section2/logo-5.png"
function section2({scrollY}) {
  return (
    <>
    <ImgHover img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} scrollY={scrollY}/>
    </>
  )
}

export default section2