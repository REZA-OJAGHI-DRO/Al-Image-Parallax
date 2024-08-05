import React from 'react'
import Ul from '../../generalComponent/ul'
function section1() {
  return (
    <section className='w-full flex justify-center'>
        <div className='w-full 2xl:container flex flex-wrap min-h-screen'>
            <Ul styleLi={'w-[100%] md:w-[40%]'} styleUl={'w-[100%] justify-around'}/>
        </div>
    </section>
  )
}

export default section1