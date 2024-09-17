import React, { useState } from "react"
import axios from 'axios'

function Weather() {
  const [city , setCity]=useState();
  const [weather, setWeather]=useState();
  const handleCityChange=(event)=>{
    setCity(event.target.value)
  };
  const fetchWeather=async () =>{
    try {
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'306442b8be4b7cde988a75f06e2d5f42'}`);
      setWeather(response)
      console.log(response);
      
    } catch (error) { 
      console.log("error fetching weather data ",error);
      
    }
  }
  
  const handleClick= () => {
    fetchWeather();
  }

  return (
    <div className="main-container">
      <input type="text" placeholder="Enter city Name" value={city} onChange={handleCityChange}/>
      <button onClick={handleClick}>Get Weather</button>
      {
        weather && <>
        <div className="weather-info">
          <h3>Name : {weather.data.name}</h3>
          <h3>Temprature : {weather.data.main.temp}</h3>
          <h3>Clounds : {weather.data.clouds.all}</h3>
          <h3>Humidity : {weather.data.main.humidity}</h3>
          <h3>Degree : {weather.data.wind.deg}</h3>
          <h3>Speed : {weather.data.wind.speed}</h3>
        </div>
        </>
      }
    </div>
  )
}

export default Weather;
