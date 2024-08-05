import React from "react";
import img1 from "../../assets/home/section1/nike-4.png";
import img2 from "../../assets/home/section1/amazon-2.png";
import img3 from "../../assets/home/section1/amd-logo-1.png";
import img4 from "../../assets/home/section1/dropcam-1-1.png";
import img5 from "../../assets/home/section1/marvel-6.png";
import ImgHover from "../../generalComponent/imgHover";

function section1({ scrollY }) {
  return (
    <>
      <section className="w-[100%] md:h-[40vh] flex flex-wrap justify-center content-center">
        <h5 className="w-[100%] py-10 text-center text-zinc-400 text-[1rem]">
          Transforming the Remote Working
        </h5>
        <ImgHover img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} scrollY={scrollY}/>
      </section>
    </>
  );
}

export default section1;
