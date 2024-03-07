import React from 'react'
import PageLayout from '../components/PageLayout'
import Card from '../components/Card.jsx'
import BottomCard from '../components/BottomCard.jsx'
import YouMayAlsoLikeCard from '../components/YouMayAlsoLikeCard.jsx'
import YouMayAlsoLike from './YouMayAlsoLike.jsx'

const HomePage = () => {
  return (
  <PageLayout>
        <div className='h-full grid grid-cols-12 gap-2 bg-slate-100'>
            <div className='col-span-8 bg-green-300'>
                <h1>left content</h1>
            </div>
            <div className='col-span-4 bg-slate-100 flex flex-col gap-5'>
                <Card/>
                <BottomCard/>
                {/* <YouMayAlsoLikeCard/> */}
                {/* <YouMayAlsoLike/> */}
            </div>
        </div>
    </PageLayout>
    )
}

export default HomePage
