import React from "react";
import Button from "../../generalComponent/button1.jsx";
import ImgRotate from "../../generalComponent/imgRotate";
import img1 from "../../assets/home/header/star-2.svg";
import "../../App.css";
function section2() {
  return (
    <section className="w-[100%] h-[40vh] md:h-[100vh] flex flex-wrap justify-center content-center">
      <article className="w-[100%] flex 2xl:container flex-wrap justify-center">
        <Button
          value={"what we do"}
          styleButton={
            "text-[rgb(171,236,214)] border border-[rgb(171,236,214)]"
          }
        />
      </article>
      <article className="w-[100%] flex 2xl:container flex-wrap justify-center">
        <div className="w-[100%] flex justify-center items-center gap-3 *:text-white *:text-[1.2rem] *:md:text-[2.5rem]  *:xl:text-[4rem] *:capitalize *:font-bold">
          <p>our technology</p>
          <ImgRotate img={img1} styleImg={"w-[30px] md:w-[40px] xl:w-[70px]"} />
          <p>empowers you</p>
        </div>
        <div className="w-[100%] flex justify-center items-center gap-3 *:text-white *:text-[1.2rem] *:md:text-[2.5rem]  *:xl:text-[4rem] *:capitalize *:font-bold">
          <ImgRotate img={img1} styleImg={"w-[30px] md:w-[40px] xl:w-[70px]"} />
          <p className="PBorder">To Unleash Your Creativity</p>
        </div>
        <div className="w-[100%] flex justify-center items-center gap-3 *:text-white *:text-[1.2rem] *:md:text-[2.5rem]  *:xl:text-[4rem] *:capitalize *:font-bold">
          <ImgRotate img={img1} styleImg={"w-[30px] md:w-[40px] xl:w-[70px]"} />
          <p>Take Your Visuals to the Next Level</p>
        </div>
        <div className="w-[100%] flex justify-center gap-3">
          <p className="w-[90%] lg:w-[50%] text-zinc-500 text-[.8rem] lg:text-[1.3rem]">
            Our platform empowers you to easily generate professional-grade
            visuals in a fraction of the time it takes with traditional editing
            tools. With our intelligent technology, you can unlock new creative
            possibilities and ennperievce to bring your vision to life like
            never before. Try it out today and experience the power of AI for
            yourself!
          </p>
        </div>
      </article>
    </section>
  );
}

export default section2;
