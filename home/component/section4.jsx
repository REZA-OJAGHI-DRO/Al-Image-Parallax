import React from "react";
import Button from "../../generalComponent/button1";
import ImgRotate from "../../generalComponent/imgRotate";
import Ul from "../../generalComponent/ul";
import img1 from "../../assets/home/header/star-2.svg";
import "../../App.css";

function section4() {
  return (
    <>
      <section className="w-[100%] h-[120vh] md:h-[150vh] lg:h-[100vh] flex justify-center items-center">
        <div className="w-[100%] 2xl:container flex flex-wrap gap-10 justify-center content-center">
          <article className="w-[100%] flex justify-center items-center">
            <Button
              value={"why choose us"}
              styleButton={
                "text-[rgb(171,236,214)] border border-[rgb(171,236,214)]"
              }
            />
          </article>
          <article className="w-[100%] flex flex-wrap gap-2 justify-center items-center *:w-[100%] *:flex *:justify-center *:text-white *:text-[1.2rem] *:md:text-[2.5rem]  *:xl:text-[4rem] *:capitalize *:font-bold">
            <div className="w-[100%]">
              <ImgRotate img={img1} styleImg={""} />
              <h4>Create Stunning</h4>
            </div>
            <div className="w-[100%]">
              <h4 className="PBorder">Original Visuals </h4>
              <h4 className="*:text-white *:text-[1.2rem] *:md:text-[2.5rem]  *:xl:text-[4rem] *:capitalize *:font-bold">
                with Ease
              </h4>
            </div>
          </article>
          <article className="w-[100%] flex justify-center items-center">
            <Ul styleLi={'w-[100%] md:w-[50%] xl:w-[22%]'} styleUl={'w-[70%] justify-between'}/>
          </article>
        </div>
      </section>
    </>
  );
}

export default section4;
