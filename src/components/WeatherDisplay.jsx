import { useState, useEffect } from 'react'
import axios from 'axios';

export function WeatherDisplay ({ city }) {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if(!city) return;

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
        setWeather(response.data);
      })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [city, apiKey]);

  if (!weather) {
    return ;
  }

  return (
    <div className={`background ${!weather ? "hidden" : ""}`}>

  <div className="city-name">{weather.name}</div>

  <div className="description">
    {weather.weather[0].description}
  </div>

  <div className="weather-flex">
    <img
      className="weather-icon"
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    />
    <div className="temp">{weather.main.temp}°C</div>
  </div>

  <div className="feels-Like">
    Feels like {weather.main.feels_like}°C
  </div>

  <div className="weather-grid">
    <div className="weather-humidity">
      Humidity: {weather.main.humidity}%
    </div>

    <div className="wind-speed">
      Wind: {weather.wind.speed} m/s
    </div>

    <div className="sunrise">
      Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
    </div>

    <div className="sunset">
      Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
    </div>
  </div>

  <p className="last-update">Updated: {new Date(weather.dt * 1000).toLocaleTimeString()}</p>
</div>

  );
  }




  