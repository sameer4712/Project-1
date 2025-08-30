import React from 'react'
import { ArrowRight } from 'lucide-react'


function Button() {
    return (
        <div>
            <button className='bg-cyan-500 text-xl text-center font-bold flex py-2 pb-3 px-4 gap-3 text-gray-800 rounded-xl hover:bg-cyan-400 tansition-all duration-150 ease-in-out cursor-pointer '>
                Apply Now <ArrowRight className='mt-1' />
            </button>
        </div>
    )
}

export default Button