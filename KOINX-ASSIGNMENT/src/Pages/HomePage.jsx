import React from 'react'
import PageLayout from '../components/PageLayout'
import Card from '../components/Card.jsx'
import BottomCard from '../components/BottomCard.jsx'
import Team from './Team.jsx'

const HomePage = () => {
  return (
  <PageLayout>
        <div className='h-full grid grid-cols-12 gap-2 bg-slate-100'>
            <div className='col-span-8  bg-slate-100'>
                {/* <h1>left content</h1> */}
                <Team/>
            </div>
            <div className='col-span-4 bg-slate-100 flex flex-col gap-5'>
                <Card/>
                <BottomCard/>
                
    
            </div>
        </div>
    </PageLayout>
    )
}

export default HomePage
