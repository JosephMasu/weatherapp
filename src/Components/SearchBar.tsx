import { cn } from '@/Utils/cn';
import React from 'react'
import { IoSearch } from "react-icons/io5";

type Props ={
    className?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
        
}

export const SearchBar = (props: Props) => {
    return (
        <form 
        onSubmit={props.onSubmit}
        className={cn('flex relative items-center justify-center h-10', props.className)}>
            <input 
            type='text'
            value={props.value}
            onChange={props.onChange}
            placeholder='Search Location'
            className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full'></input>
            <button 
            
            className='px-4 py-[8px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full'>
                <IoSearch/>
            </button>
        </form>
    )
}
