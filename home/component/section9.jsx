import React, { useRef, useState } from "react";
import Button from "../../generalComponent/button1";
import ImgRotate from "../../generalComponent/imgRotate.jsx";
import img1 from "../../assets/home/section9/img-4.jpg"
import img2 from "../../assets/home/section9/Rectangle-323-1.jpg"
import img3 from "../../assets/home/header/star-2.svg";
import ImageHover from "../../generalComponent/imageHover.jsx";
function section9() {
  const listRes = useRef();

  function openListAccordion(x) {
    const listItems = listRes.current.children[0].children;
    for (let i = 0; i < listItems.length; i++) {
      const itemContent = listItems[i].children[1];
      const itemIcon1 = listItems[i].children[0].children[1];
      const itemIcon2 = listItems[i].children[0].children[2];
      
      if (i !== x - 1) {
        itemContent.style.display = "none";
        itemIcon1.style.display = "block";
        itemIcon2.style.display = "none";
      } else {
        if (itemContent.style.display === "block") {
          itemContent.style.display = "none";
          itemIcon1.style.display = "block";
          itemIcon2.style.display = "none";
        } else {
          itemContent.style.display = "block";
          itemIcon1.style.display = "none";
          itemIcon2.style.display = "block";
        }
      }
    }
  }
  return (
    <section className="w-[100%] flex justify-center">
      <div className="w-full 2xl:container min-h-screen flex flex-wrap py-16 lg:py-32">
        <article className="w-[100%] lg:w-[50%] px-4 lg:pe-10 py-10 flex flex-wrap gap-6 lg:gap-10">
          <div className="w-full">
            <Button
              value={"flexable & affordable"}
              styleButton={
                "text-[rgb(171,236,214)] border border-[rgb(171,236,214)] text-[1rem] lg:text-[1.5rem]"
              }
            />
          </div>
          <div className="w-full">
            <h4 className="w-full flex items-center text-white text-[3rem] lg:text-[5rem] font-bold gap-3">
              Have a <ImgRotate img={img3} styleImg={"w-[40px] lg:w-[70px]"} />
            </h4>
            <h4 className="w-full flex items-center text-white text-[3rem] lg:text-[5rem] font-bold gap-3">
              Question?
            </h4>
          </div>
          <div ref={listRes} className="w-full">
            <ul className="w-full flex flex-wrap *:w-full">
              <li>
                <div className="w-full flex items-center justify-between border-b border-zinc-400" onClick={() => openListAccordion(1, event)}>
                  <h4 className="text-white text-[1.2rem] lg:text-[1.8rem] font-bold py-3 lg:py-5">
                    Is there a limit to the number of patterns created?
                  </h4>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]">
                  stat_minus_1 
                  </span>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]" style={{display:'none'}}>
                 keyboard_control_key
                  </span>
                </div>
                <div className="w-full flex items-center " style={{display:'none'}}>
                  <p className="text-zinc-400 text-[1rem] lg:text-[1.2rem] py-3 lg:py-5">
                    No. There is no limit to the number of images you can create
                    using our platform.
                  </p>
                </div>
              </li>
              <li>
                <div className="w-full flex items-center justify-between border-b border-zinc-400" onClick={() => openListAccordion(2, event)}>
                  <h4 className="text-white text-[1.2rem] lg:text-[1.8rem] font-bold py-3 lg:py-5">
                    Can I customize the images?
                  </h4>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]">
                  stat_minus_1 
                  </span>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]" style={{display:'none'}}>
                 keyboard_control_key
                  </span>
                </div>
                <div className="w-full flex items-center" style={{display:'none'}}>
                  <p className="text-zinc-400 text-[1rem] lg:text-[1.2rem] py-3 lg:py-5">
                    Yes, you can customize the images.
                  </p>
                </div>
              </li>
              <li>
                <div className="w-full flex justify-between items-center border-b border-zinc-400" onClick={() => openListAccordion(3, event)}>
                  <h4 className="text-white text-[1.2rem] lg:text-[1.8rem] font-bold py-3 lg:py-5">
                    What types of image formats can I export?
                  </h4>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]">
                  stat_minus_1 
                  </span>
                  <span className="material-symbols-outlined text-white text-[1.2rem] lg:text-[1.8rem]" style={{display:'none'}}>
                 keyboard_control_key
                  </span>
                </div>
                <div className="w-full flex items-center" style={{display:'none'}}>
                  <p className="text-zinc-400 text-[1rem] lg:text-[1.2rem] py-3 lg:py-5">PNG or JPG</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
        <article className="w-[100%] h-[400px] md:h-[500px] lg:h-auto  lg:w-[50%] flex justify-center items-center relative mt-10 lg:mt-0">
        <ImageHover img1={img1} img2={img2} styleImg={`w-[300px] sm:w-[350px] md:w-[450px] lg:w[500px] xl:w-[650px] h-[350px] sm:h-[375px] md:h-[475px] lg:h-[550px] xl:h-[700px] top-[0%] -translate-x-[50%] left-[50%] transition-all duration-1000 `}/>
        </article>
      </div>
    </section>
  );
}

export default section9;
