import React from 'react';
import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { SearchBar } from './SearchBar';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className='shadow-sm sticky left-0 top-0 z-50 bg-white'>
      <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-gray-500 text-3xl">Weather</h1>
          <MdWbSunny className='text-3xl mt-1 text-yellow-300'/>
        </div>
        <section className='flex gap-2 items-center'>
         <MdMyLocation className="text-2xl  text-gray-400 hover:opacity-80 cursor-pointer"/> 
         <MdOutlineLocationOn className="text-2xl"/>
         <p className='text-slate-900/88 text-sm'>uganda</p>
         <div>
          <SearchBar/>
         </div>
        </section>
      </div>
    </nav>
  );
}
