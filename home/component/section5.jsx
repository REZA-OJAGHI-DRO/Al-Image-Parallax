import React from 'react'
import Button from "../../generalComponent/button1";
import ClickLink from '../../generalComponent/clickLink';
import img1 from "../../assets/home/section5/gallery-1.png"
import img2 from "../../assets/home/section5/gallery-2.png"
import img3 from "../../assets/home/section5/gallery-3.png"
import img4 from "../../assets/home/section5/gallery-4.png"
import img5 from "../../assets/home/section5/gallery-5.png"
import './section5.css'
function section5() {
  return (
    <section className='w-full min-h-screen flex justify-center py-16 px-4'>
        <div className='w-full 2xl:container'>
            <article className='w-full flex justify-center mb-8'>
                <Button value={'potent software'} styleButton={'text-[rgb(171,236,214)] border border-[rgb(171,236,214)]'}/>
            </article>
            <article className='w-full *:w-full *:flex *:justify-center *:text-white *:text-[1.2rem] *:md:text-[2.5rem] *:xl:text-[4rem] *:capitalize *:font-bold mb-8'>
                <h4>Most Popular</h4>
                <h4>Products</h4>
            </article>
            <article className='w-full flex justify-center mb-12'>
                <p className='w-[95%] lg:w-[50%] text-center text-[1rem] lg:text-[1.2rem] font-bold text-zinc-400'>Browse our most popular products today and start creating images that stand out and captivate your audience like never before.</p>
            </article>
            <article className='w-full flex flex-wrap justify-center'>
                <div className='w-[100%] md:w-[90%] lg:w-[70%] grid imgGrid gap-4'>
                    {[img1, img2, img3, img4, img5].map((img, index) => (
                        <div
                            key={index}
                            className="w-full h-64 lg:h-full relative overflow-hidden"
                            onMouseMove={(e) => {
                                if (window.innerWidth >= 1024) {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const rotateX = (y / rect.height - 0.5) * 20;
                                    const rotateY = (x / rect.width - 0.5) * -20;
                                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (window.innerWidth >= 1024) {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                                }
                            }}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                            />
                        </div>
                    ))}
                </div>
                <div className='w-full'>
                <ClickLink value={'View All Images'} link={'#'}/>
                </div>
            </article>
        </div>
    </section>
  )
}

export default section5