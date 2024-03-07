import React from 'react'

function Card() {
  return (
    <div className='bg-blue-500  grid rounded-lg pd-8 ml-12 mr-12 md-2 p-2 pt-10 pb-10 place-content-center'>
      <h1 className='place-content-center mt-1 text-center font-bold text-white text-xl'>
        Get Started with KoinX <br></br>
        for FREE
      </h1>
      <p className='text-white pt-3'>With our range of features that you can equip for<br></br> 
        free, KoinX allows you to be more educated and <be></be>
        <span class="block text-center">aware of your tax reports</span></p>
        <img src={"https://cdn.svgator.com/assets/landing-pages/vector-animation/best-software-for-vector-animation.svg"} className="w-60 mx-auto" />
      <button className='text-blue-900 bg-white rounded-r-md rounded-l-lg py-1 mx-10 mt-3'>Get Started for FREE </button>
    </div>
  )
}


export default Card