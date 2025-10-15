import React from 'react'

function Card({ name, para,image }) {
    
    return (
        <div className='flex flex-col bg-slate-900 w-[24rem] p-8 mt-16  border border-gray-700 hover:border-gray-500 rounded-xl transition-all duration-500 ease-in-out hover:-translate-y-2'>
            <div>{image}</div>
            <h1 className='text-2xl font-bold text-cyan-50'>{name}</h1>
            <p className='text-[1.2rem] text-gray-400' >{para}</p>
        </div>
    )
}


export default Card