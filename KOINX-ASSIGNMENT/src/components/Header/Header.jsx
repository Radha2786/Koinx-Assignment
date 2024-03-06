import React from 'react'

function Header() {

    const navItems =[
        {
            name:'Crypto Taxes',
            link:'/cryptotaxes'
        },
        {
            name:'Free Tools',
            link:'/Free-Tools'
        },
        {
            name:'Resource Carrier',
            link:'/Resource-carrier'
        }
    ]
  return (
    <header className='p-2 bg-white pl-4 pr-4 border-b-4 border-slate-200'>
        <nav className='flex  justify-between items-center p-1'>
           <div className='bg-yellow-200'>
            <h1>Div 1</h1>
           </div>
           <div className='flex gap-5 items-center'>
            <ul className='flex gap-3'>
                {navItems.map((item)=>{
                    return <li key={item.name}>{item.name}</li>
                })}
            </ul>
            <button className='bg-blue-500 rounded-lg p-3 text-white pl-5 pr-5'>
                Get Started
            </button>
           </div>
        </nav>
        
       
    </header>
  )
}

export default Header