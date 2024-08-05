import React from 'react'
import '../home/component/section1.css'
function imgHover({img1 , img2,img3,img4,img5 ,scrollY}) {
  return (
    <>
         <div className="w-[100%] overflow-hidden">
          <div
            className="w-[100%] py-10 relative"
            style={{ transform: "translateX(" + scrollY / 100 + "%)" }}
          >
            <div className={`w-[100%] flex justify-around imgAni1 absolute`}>
              <img src={img1} alt="" className="w-[5%]" />
              <img src={img2} alt="" className="w-[5%]" />
              <img src={img3} alt="" className="w-[5%]" />
              <img src={img4} alt="" className="w-[5%]" />
              <img src={img5} alt="" className="w-[5%]" />
              <img src={img1} alt="" className="w-[5%]" />
              <img src={img2} alt="" className="w-[5%]" />
              <img src={img3} alt="" className="w-[5%]" />
              <img src={img4} alt="" className="w-[5%]" />
              <img src={img5} alt="" className="w-[5%]" />
            </div>
            <div className="w-[100%] flex justify-around imgAni2 absolute">
              <img src={img1} alt="" className="w-[5%]" />
              <img src={img2} alt="" className="w-[5%]" />
              <img src={img3} alt="" className="w-[5%]" />
              <img src={img4} alt="" className="w-[5%]" />
              <img src={img5} alt="" className="w-[5%]" />
              <img src={img1} alt="" className="w-[5%]" />
              <img src={img2} alt="" className="w-[5%]" />
              <img src={img3} alt="" className="w-[5%]" />
              <img src={img4} alt="" className="w-[5%]" />
              <img src={img5} alt="" className="w-[5%]" />
            </div>
          </div>
        </div>
    </>
  )
}

export default imgHover