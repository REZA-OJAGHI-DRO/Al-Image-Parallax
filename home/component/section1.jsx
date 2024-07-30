import React from "react";
import img1 from '../../assets/home/section1/nike-4.png'
import img2 from '../../assets/home/section1/amazon-2.png'
import img3 from '../../assets/home/section1/amd-logo-1.png'
import img4 from '../../assets/home/section1/dropcam-1-1.png'
import img5 from '../../assets/home/section1/marvel-6.png'
import './section1.css'
function section1({ scrollY}) {
  return (
    <>
      <section className="w-[100%] md:h-[40vh] flex flex-wrap justify-center content-center">
        <h5 className="w-[100%] py-10 text-center text-zinc-400 text-[1rem]">Transforming the Remote Working</h5>
        <div className="w-[100%] overflow-hidden">
        <div className="w-[100%] py-10 relative" style={{transform:'translateX('+scrollY/100+'%)'}}>
            <div className={`w-[100%] flex justify-around imgAni1 absolute`} >
            <img src={img1} alt="" className="w-[5%]"/>
            <img src={img2} alt="" className="w-[5%]"/>
            <img src={img3} alt="" className="w-[5%]"/>
            <img src={img4} alt="" className="w-[5%]"/>
            <img src={img5} alt="" className="w-[5%]"/>
            <img src={img1} alt="" className="w-[5%]"/>
            <img src={img2} alt="" className="w-[5%]"/>
            <img src={img3} alt="" className="w-[5%]"/>
            <img src={img4} alt="" className="w-[5%]"/>
            <img src={img5} alt="" className="w-[5%]"/>
            </div>
            <div className="w-[100%] flex justify-around imgAni2 absolute">
            <img src={img1} alt="" className="w-[5%]"/>
            <img src={img2} alt="" className="w-[5%]"/>
            <img src={img3} alt="" className="w-[5%]"/>
            <img src={img4} alt="" className="w-[5%]"/>
            <img src={img5} alt="" className="w-[5%]"/>
            <img src={img1} alt="" className="w-[5%]"/>
            <img src={img2} alt="" className="w-[5%]"/>
            <img src={img3} alt="" className="w-[5%]"/>
            <img src={img4} alt="" className="w-[5%]"/>
            <img src={img5} alt="" className="w-[5%]"/>
            </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default section1;
