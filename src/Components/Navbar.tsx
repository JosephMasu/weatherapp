import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='shadow-sn stiky left-0 top-0 z-50 bg-white'>
        
        <div className='h-[80px w-full flex justify-between 
        items-center  max-w-7xl px-3 mx-auto'>
             <p className="flex items-center justify-center gap-2  "></p>
             <h1 className="text-gray-500 text-3xl">Weather</h1>
             
        </div>
        Navbar</nav >
  );
}

