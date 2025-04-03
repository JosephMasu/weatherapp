'use client'
import React, { useState } from 'react';
import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import axios from 'axios';
import SearchBox from './SearchBar';

type Props = {};
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
console.log('API Key:', API_KEY);

export default function Navbar({}: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  async function handleInputOnchange(value: string) {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`);
        console.log('API Response:', response.data);
        const suggestions = response.data.list.map((item: any) => item.name);
        setSuggestions(suggestions);
        setError('');
        setShowSuggestions(true);
      } catch (error) {
        console.error('API Error:', error);
        setSuggestions([]);
        setShowSuggestions(false);
        setError('Error fetching suggestions');
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function handleSuggestionClick(value: string) {
    setCity(value);
    setShowSuggestions(false);
  }

  function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (suggestions.length === 0) {
      setError("Location not found");
    } else {
      setError('');
      setShowSuggestions(false);
    }
  }

  return (
    <nav className='shadow-sm sticky left-0 top-0 z-50 bg-white'>
      <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-gray-500 text-3xl">Weather</h1>
          <MdWbSunny className='text-3xl mt-1 text-yellow-300' />
        </div>
        <section className='flex gap-2 items-center'>
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-2xl" />
          <p className='text-slate-900/88 text-sm'>india</p>
          <div className='relative'>
            <SearchBox
              value={city}
              onSubmit={handleSubmitSearch}
              onChange={(e) => handleInputOnchange(e.target.value)}
            />
            <SuggestionsBox
              {...{
                showSuggestions,
                suggestions,
                handleSuggestionClick,
                error
              }}
            />
          </div>
        </section>
      </div>
    </nav>
  );
}

function SuggestionsBox({
  showSuggestions,
  suggestions,
  handleSuggestionClick,
  error
}: {
  showSuggestions: boolean;
  suggestions: string[];
  handleSuggestionClick: (item: string) => void;
  error: string;
}) {
  return (
    <>
      {((showSuggestions && suggestions.length > 0) || error) && (
        <ul className='mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px] flex flex-col gap-1 py-2 px-2'>
          {error && suggestions.length < 1 && (
            <li className='text-red-500 p-1'>{error}</li>
          )}
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSuggestionClick(item)}
              className='cursor-pointer p-1 rounded hover:bg-gray-200'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
