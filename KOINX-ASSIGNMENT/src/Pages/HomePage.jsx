import React from 'react'
import PageLayout from '../components/PageLayout'
import Card from '../components/Card.jsx'

const HomePage = () => {
  return (
  <PageLayout>
        <div className=' h-screen grid grid-cols-12 gap-2'>
            <div className='col-span-8 bg-green-300'>
                <h1>left content</h1>
            </div>
            <div className='col-span-4 '>
                <Card></Card>
            </div>
        </div>
    </PageLayout>
    )
}

export default HomePage
