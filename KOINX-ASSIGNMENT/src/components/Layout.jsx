import React from 'react'

function Layout({ children }) {
  return (
    <div className="h-screen mt-8 mr-8 ml-8">
      {children}
    </div>
  )
}

export default Layout