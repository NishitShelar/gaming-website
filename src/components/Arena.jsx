import React from 'react'

const Arena = () => {
  return (
    // main container
    <div className='md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60'>
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest mb-28'
        style={{textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 20px rgba(167,139, 250, 0.5"}}>
            Arena
        </h1>
      </div>

      {/* grid container*/}
      <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 
      md:grid-cols-3 gap-4 md:gap-6'>
        {/* left column 1/3 */}
        <div className="md:col-span-1 "></div>
      </div>
    </div>
  )
}

export default Arena
