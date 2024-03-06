import React from 'react'

function Card() {
  return (
    <div className='bg-blue-500 h-96 grid rounded-lg pd-8 ml-12 mr-12 md-2 pl-4 pr-4 place-content-center'>
      <h1 className='place-content-center mt-1 text-center font-bold text-white text-xl'>
        Get Started with KoinX <br></br>
        for FREE
      </h1>
      <p className='text-white pt-3'>With our range of features that you can equip for<br></br> 
        free, KoinX allows you to be more educated and <be></be>
        <span class="block text-center">aware of your tax reports</span></p>
      <img className='justify-self-center w-40 h-32 pt-4 justify-items-center'
       src='https://www.shutterstock.com/shutterstock/photos/1694176021/display_1500/stock-vector-e-learning-banner-online-education-home-schooling-modern-workplace-man-teacher-on-laptop-screen-1694176021.jpg'>
      </img>
      <button className='text-blue-900 bg-white rounded-r-md rounded-l-lg py-1 mx-10 mt-3'>Get Started for FREE </button>
    </div>
  )
}


export default Card