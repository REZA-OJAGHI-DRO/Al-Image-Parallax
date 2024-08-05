import React from 'react'
import ImgRotate from '../../generalComponent/imgRotate'
import img from "../../assets/home/header/star-2.svg";

function Header() {
  return (
    <>
    <header className='w-full flex justify-center'>
        <div className='w-full 2xl:container min-h-screen flex justify-center items-center'>
            <ImgRotate img={img} styleImg={'w-[70px]'}/>
            <h4 className='text-white text-[5rem] font-bold'>  Our  Features</h4>
        </div>
    </header>
    </>
  )
}

export default Header