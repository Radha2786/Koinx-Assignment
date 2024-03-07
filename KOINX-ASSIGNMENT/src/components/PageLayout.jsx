import React from 'react'
import Header from './Header/Header'
import Layout from './Layout'
import YouMayAlsoLike from '../Pages/YouMayAlsoLike'

const PageLayout = ({children}) => {
  return (
    <>
      <Header/>
      <Layout>
        {children}
      </Layout>
      <YouMayAlsoLike/>
    </>
  )
}

export default PageLayout
