import React from 'react'

function Button({name}) {
    return (
        <div>
            <button className='bg-cyan-400 text-xl text-center font-bold flex py-2 pb-3 px-4 gap-3 border border-gray-400 text-gray-800 rounded-xl hover:bg-cyan-500 tansition-all duration-150 ease-in-out cursor-pointer '>
                {name} 
            </button>
        </div>
    )
}
export default Button