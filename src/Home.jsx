import React from 'react'
import Page from './assets/download.png'
import Button from './components/Button'


function Home() {
    return (
        <div>
            <img className='absolute inset-0' src={Page} alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/57 to-transparent"></div>
            <div className='font-bold relative top-55 left-16'>
                <h1 className=' text-7xl text-white'>Where <span className='text-cyan-400'>Code </span> <br />Controls <span className='text-orange-400'>Reality</span></h1>
                <p className='text-gray-300 text-[1.2rem] py-6 w-[43rem] font-semibold leading-[2.2rem] '>Step beyond web frameworks into the future of industrial automation. Your software skills can revolutionize manufacturing, robotics, and the physical world.</p>
            </div>
            <div className='relative top-55 left-16 flex gap-5'>
                <Button />
                <button className='bg-transparent text-orange-400 py-2 border border-gray-400 rounded-[0.7rem] font-bold px-5 '>
                    Free Simultation Software 
                </button>

            </div>
        </div>
    )
}

export default Home