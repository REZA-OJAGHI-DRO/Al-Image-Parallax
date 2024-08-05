import { useEffect, useRef, useState } from "react";
import Button from "../../generalComponent/button1";
import Svg from "../../generalComponent/svg1";
import ImgRotate from "../../generalComponent/imgRotate";
import ImageHover1 from "../../generalComponent/imageHover";
import ImageHover2 from "../../generalComponent/imageHover";
import img1 from '../../assets/home/section3/img-1.jpg'
import img2 from '../../assets/home/section3/Rectangle-322.jpg'
import img3 from '../../assets/home/section3/img-2.jpg'
import img4 from '../../assets/home/section3/Rectangle-324.jpg'
import img5 from '../../assets/home/section3/circle-text2.png'

function section3({scrollY}) {
    const boxRef = useRef(null);
    const [distance, setDistance] = useState(0);
  
    useEffect(() => {
      const calculateDistance = () => {
        if (boxRef.current) {
          const boxTop = boxRef.current.getBoundingClientRect().top + window.scrollY;
          setDistance(boxTop);
        }
      };
  
      calculateDistance();
      window.addEventListener('resize', calculateDistance);
      window.addEventListener('scroll', calculateDistance);
  
      return () => {
        window.removeEventListener('resize', calculateDistance);
        window.removeEventListener('scroll', calculateDistance);
      };
    }, []);

  return (
    <section ref={boxRef} className="w-[100%] h-[100vh] flex justify-center flex-wrap border-b-8 border-zinc-600">
      <article className="w-[100%] 2xl:container md:w-[50%] h-[40%] md:h-[100%] flex relative">
        <ImageHover2 img1={img3} img2={img4} styleImg={`w-[150px] lg:w-[300px] h-[175px] lg:h-[350px] top-[10%] left-[50%] transition-all duration-1000 translate-y-[${(distance-scrollY)/5}%]`} styleImg1={`translate-y-[${(distance-scrollY)/5}%}]`} styleImg2={`translate-y-[${(distance-scrollY)/5}%}]`}/>
        <ImageHover1 img1={img1} img2={img2} styleImg={`w-[150px] lg:w-[300px] h-[175px] lg:h-[350px] top-[40%] left-[20%] transition-all duration-1000 translate-y-[${(distance-scrollY)/3}%]`} styleImg1={`translate-y-[${(distance-scrollY)/5}%}]`} styleImg2={`translate-y-[${(distance-scrollY)/5}%}]`}/>
      </article>
      <article className="w-[100%] 2xl:container md:w-[50%] h-[60%] md:h-[100%] relative p-10 flex flex-wrap gap-5 justify-center content-start">
        <div className="w-[100%]">
          <Button
            value={"fully unique"}
            styleButton={
              "text-[rgb(171,236,214)] border border-[rgb(171,236,214)]"
            }
          />
        </div>
        <h4 className="w-[100%] *:text-white text-[2rem] *:lg:text-[4rem] *:w-[100%] flex flex-wrap *:font-bold">
          <span>No More</span>
          <span>Tedious Editing</span>
        </h4>
        <p className="w-[100%] text-zinc-400 text-[1rem] lg:text-[1.5rem]">
          Say goodbye to the days of tedious editing with our revolutionary
          platform
        </p>
        <ul className="w-[100%] flex flex-wrap gap-1 lg:gap-5 *:w-[100%] *:flex *:gap-4 *:items-center *:text-[1rem] *:lg:text-[1.5rem] *:text-zinc-200">
          <li>
            <Svg
              styleSvg={
                "text-[rgb(253,244,188)] bg-[rgb(33,38,42)] rounded-full p-2 lg:p-4 hover:bg-[rgb(253,244,188)] hover:text-[rgb(33,38,42)] hover:scale-125 transition-all duration-300"
              }
            />
            <p>Intelligent image editing</p>
          </li>
          <li>
            <Svg
              styleSvg={
                "text-[rgb(253,244,188)] bg-[rgb(33,38,42)] rounded-full p-2 lg:p-4 hover:bg-[rgb(253,244,188)] hover:text-[rgb(33,38,42)] hover:scale-125 transition-all duration-300"
              }
            />
            <p>Customizable image styles</p>
          </li>
          <li>
            <Svg
              styleSvg={
                "text-[rgb(253,244,188)] bg-[rgb(33,38,42)] rounded-full p-2 lg:p-4 hover:bg-[rgb(253,244,188)] hover:text-[rgb(33,38,42)] hover:scale-125 transition-all duration-300"
              }
            />
            <p>Unprecedented image creation</p>
          </li>
        </ul>
        <ImgRotate styleImg={'w-[75px] lg:w-[150px] absolute -bottom-[10%] right-[20%]'} img={img5}/>
      </article>
    </section>
  );
}

export default section3;
