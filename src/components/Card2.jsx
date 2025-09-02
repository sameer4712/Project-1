import React from 'react'

function Card2({ input }) {
    return (
        <div className='text-gray-400 lg:font-mono font-semi-bold border border-gray-600 px-6 sm:px-10 py-6 rounded-xl '>
            <h3 className="mb-2 lg:text-[1.3rem]">Topic: factory/line1/sensor/temperature</h3>

            <p>&#123;</p>
            <div className='flex flex-col sm:flex-row sm:justify-between'>
                <p className='pl-5 leading-relaxed'>
                    "deviceId": "TMP-001", <br />
                    "timestamp": 1704712800000, <br />
                    "temperature": 78.5, <br />
                    "unit": "celsius", <br />
                    "status": "normal" <br />
                </p>
                <button className='bg-transparent border border-gray-600 px-4 h-[2.4rem] rounded-2xl mt-4 sm:mt-0 sm:ml-4 self-start sm:self-center'>
                    {input}
                </button>
            </div>
            <p>&#125;</p>
            <p className='pt-1 text-[0.8rem]'>Temperature sensor publishing real-time data via MQTT</p>
        </div>
    )
}

export default Card2
