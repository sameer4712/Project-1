import React from 'react'

function Card3({no,title,para}) {
  return (
    
    <div className='flex flex-col items-center justify-center py-9 px-17 text-cyan-50 bg-slate-900 lg:mt-4 border border-gray-700 rounded-lg'>
        <h1 className='font-bold text-4xl mb-2 '>{no}</h1>
        <h2  className='font-bold text-lg mb-2'>{title}</h2> 
        <p>{para}</p>
    </div>
  )
}

export default Card3