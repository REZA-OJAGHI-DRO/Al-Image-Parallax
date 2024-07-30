import React from 'react'

function clickLink({value , link}) {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-8">
                        <a 
                            href={link} 
                            className="text-white text-[2rem] font-semibold relative inline-flex items-center
                                       transition-all duration-300 ease-in-out
                                       hover:text-[rgb(171,236,214)] hover:scale-110
                                       after:content-[''] after:absolute after:left-0 after:bottom-0 
                                       after:h-[2px] after:bg-white after:w-0 
                                       hover:after:w-full hover:after:bg-[rgb(171,236,214)]
                                       after:transition-all after:duration-300"
                        >
                             {value}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[25px] ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
    </>
  )
}

export default clickLink