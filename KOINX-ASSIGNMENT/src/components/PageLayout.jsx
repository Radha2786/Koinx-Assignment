import React from 'react'
import Header from './Header/Header'
import Layout from './Layout'

const PageLayout = ({children}) => {
  return (
    <>
      <Header/>
      <Layout>
        {children}
      </Layout>
    </>
  )
}

export default PageLayout
