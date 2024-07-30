import React, { useEffect, useState } from "react";
import Button from "../../generalComponent/button1";
import ImgRotate from '../../generalComponent/imgRotate';
import img2 from '../../assets/home/header/star-2.svg'
import img from "../../assets/home/section6/carousel-img.png";
const section7 = () => {
    const testimonials = [
        {
            quote: "“I was blown away by the quality of the images I was able to generate with this platform. The AI algorithms are truly cutting-edge and the intuitive interface makes it incredibly easy to use.”",
            name: "Sara Johnon",
            title: "Freelancer"
        },
        {
            quote: "“ChatGPT has been a game-changer for our customer service team. The language model’s ability to understand and respond to customer queries has greatly reduced our response time and increased customer satisfaction.”",
            name: "Mark Smith",
            title: "Customer Service Manager"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="w-full flex justify-center min-h-screen bg-[rgb(27,31,40)]">
            <div className="w-full flex flex-wrap 2xl:container">
                <div className="w-full lg:w-[50%] flex justify-center items-center">
                    <div
                        className="w-[350px] h-[350px] rounded-full overflow-hidden"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const rotateX = (y / rect.height - 0.5) * 20;
                            const rotateY = (x / rect.width - 0.5) * -20;
                            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                        }}
                    >
                        <img
                            src={img}
                            alt="Circular Image"
                            className="w-full h-full object-cover transition-transform duration-300 ease-out"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center p-4">
                    <div className="w-full">
                        <Button
                            value={"testimonial"}
                            styleButton={"text-[rgb(171,236,214)] border border-[rgb(171,236,214)]"}
                        />
                    </div>
                    <div className='w-full gap-3 flex *:flex *:justify-center *:text-white *:text-[1.2rem] *:md:text-[2.5rem] *:xl:text-[4rem] *:capitalize *:font-bold mb-8'>
                        <h4 className="">What They Say?</h4>
                        <ImgRotate img={img2} />
                    </div>

                    <div className="w-full mt-8 relative">
                        <div className="overflow-hidden">
                            <div className="transition-opacity duration-500 ease-in-out">
                                <div className="w-[100%] lg:w-[80%] flex flex-wrap text-white py-6">
                                    <p className="w-[100%] text-[1.5rem] text-zinc-400 mb-4 flex justify-start">
                                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                    </p>
                                    <h4 className="font-bold flex justify-start w-[100%]">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm flex justify-start w-[100%] text-gray-400">{testimonials[currentIndex].title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-4">
                        <div className="flex space-x-4">
                            <button 
                                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[rgb(171,236,214)] text-[rgb(171,236,214)]"
                                onClick={prevTestimonial}
                            >
                                &lt;
                            </button>
                            <button 
                                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[rgb(171,236,214)] text-[rgb(171,236,214)]"
                                onClick={nextTestimonial}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default section7;
