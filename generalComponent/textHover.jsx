import React from 'react'
import "../App.css";
import img from '../assets/home/header/star-2.svg'
import ImgRotate from './imgRotate';
function TextHover({text1 , text2}) {
  return (
    <section className='w-[100%] flex justify-center'>
    <div className='w-full'>
        <article className='w-full overflow-hidden relative'>
            <div className='whitespace-nowrap text-white animate-marquee-rtl flex items-center justify-center'>
                <div className='flex items-center'>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4'>{text1}</span>
                    <ImgRotate img={img} styleImg="inline-block w-12 h-12 md:w-16 md:h-16 mx-4"/>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4 PBorder'>{text2}</span>
                    <ImgRotate img={img} styleImg="inline-block w-12 h-12 md:w-16 md:h-16 mx-4"/>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4'>{text1}</span>
                    <ImgRotate img={img} styleImg="inline-block w-12 h-12 md:w-16 md:h-16 mx-4"/>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4 PBorder'>{text2}</span>
                    <ImgRotate img={img} styleImg="inline-block w-12 h-12 md:w-16 md:h-16 mx-4"/>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4'>{text1}</span>
                    <ImgRotate img={img} styleImg="inline-block w-12 h-12 md:w-16 md:h-16 mx-4"/>
                    <span className='inline-block text-[4rem] md:text-[6rem] font-bold mr-4 PBorder'>{text2}</span>
                </div>
            </div>
        </article>
        <style>{`
            @keyframes marquee-rtl {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee-rtl {
                display: inline-block;
                animation: marquee-rtl 40s linear infinite;
                white-space: nowrap;
            }
        `}</style>
    </div>
</section>
  )
}

export default TextHover