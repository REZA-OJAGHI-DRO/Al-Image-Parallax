import React from "react";
import Button from "../../generalComponent/button1";
import ClickLink from "../../generalComponent/clickLink";
import img1 from "../../assets/home/section11/blog-1.jpg";
import img2 from "../../assets/home/section11/blog-2.jpg";
import img3 from "../../assets/home/section11/blog-3.jpg";
function section11() {
  return (
    <section className="w-full flex justify-center pb-32 border-b-8 border-zinc-800">
      <div className="w-full 2xl:container px-4">
        <article className="w-full py-10 md:py-20">
          <div className="w-full flex justify-center">
            <Button
              value={"newest article"}
              styleButton={
                "text-[rgb(171,236,214)] border border-[rgb(171,236,214)] text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] mb-6 md:mb-10"
              }
            />
          </div>
          <h4 className="w-full text-white text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold flex justify-center text-center">
            AI Image
          </h4>
          <h4 className="w-full text-white text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold flex justify-center text-center">
            Trends
          </h4>
        </article>
        <article className="w-full flex flex-wrap justify-center gap-10">
          <figure className="w-full md:w-[50%] lg:w-[30%] mb-10 md:mb-0">
            <img src={img3} alt="" className="w-full h-auto" />
            <figcaption className="w-full py-5">
              <div className="w-full flex justify-start items-center">
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] text-[rgb(171,236,214)] px-2 sm:px-4 md:px-7">
                  3 years ago ✦ Animation
                </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <a
                  href=""
                  className="text-white text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold px-2 text-left mt-3 hover:text-[rgb(171,236,214)]"
                >
                  The Ethical Implications of AI-Generated Images
                </a>
              </div>
              <div className="w-full flex justify-start items-center">
                <ClickLink value={"Read More"} link={"#"} />
              </div>
            </figcaption>
          </figure>
          <figure className="w-full md:w-[50%] lg:w-[30%] mb-10 md:mb-0">
            <img src={img2} alt="" className="w-full h-auto" />
            <figcaption className="w-full py-5">
              <div className="w-full flex justify-start items-center">
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] text-[rgb(171,236,214)] px-2 sm:px-4 md:px-7">
                  1 year ago ✦ Creative
                </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <a
                  href=""
                  className="text-white text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold px-2 text-left mt-3 hover:text-[rgb(171,236,214)]"
                >
                  Our work shows real results from a wide range of clients.
                </a>
              </div>
              <div className="w-full flex justify-start items-center">
                <ClickLink value={"Read More"} link={"#"} />
              </div>
            </figcaption>
          </figure>
          <figure className="w-full md:w-[50%] lg:w-[30%]">
            <img src={img1} alt="" className="w-full h-auto" />
            <figcaption className="w-full py-5">
              <div className="w-full flex justify-start items-center">
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] text-[rgb(171,236,214)] px-2 sm:px-4 md:px-7">
                  1 year ago ✦ Creative
                </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <a
                  href=""
                  className="text-white text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold px-2 text-left mt-3 hover:text-[rgb(171,236,214)]"
                >
                  Our work shows real results from a wide range of clients.
                </a>
              </div>
              <div className="w-full flex justify-start items-center">
                <ClickLink value={"Read More"} link={"#"} />
              </div>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default section11;
