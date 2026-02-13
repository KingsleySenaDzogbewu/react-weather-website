import { useState } from 'react';
import searchIcon from '../assets/search.svg'

export function CityInput ({onSearch}) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return; 
    onSearch(city); 
    setCity(""); 
  };

  return (
    <div className='input-header'>
      <input 
        className='input-city'
        type="text"  
        placeholder='Enter your city' 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
    />

      <button className='search-icon-button' onClick={handleSearch} >
        <img src= {searchIcon} className='search-icon' />
      </button>
    </div>
  );
}