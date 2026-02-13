import { useState } from "react";
import { WeatherDisplay } from './components/WeatherDisplay'
import { CityInput } from './components/CityInput'
import './App.css'

function App() {
  const [city, setCity]= useState("");
  
  const handleSearch = (cityName) => {
    setCity(cityName); // updates state → triggers WeatherDisplay useEffect
  };




  return (
    <div>
      <CityInput onSearch={handleSearch}/>
      <WeatherDisplay city={city}/>
    </div>
   
  );
}

export default App
