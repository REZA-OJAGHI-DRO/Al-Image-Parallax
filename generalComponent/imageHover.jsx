import React from 'react'

function imageHover({img1 , img2 ,styleImg ,styleImg1 ,styleImg2}) {
  return (
    <figure className={`${styleImg} absolute group overflow-hidden`}>
        <img src={img2} className={` ${styleImg1} w-[100%] absolute h-[100%]  blur-[10px] group-hover:blur-[0px] transition-all duration-1000`} alt="" />
        <img src={img1} className={` ${styleImg2} w-[100%] absolute h-[100%]  opacity-100 blur-[0px] group-hover:blur-[10px] group-hover:opacity-0 transition-all duration-1000`} alt="" />
    </figure>
  )
}

export default imageHover