import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState();

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"22bc5d959602b22e2933dce06b2d3111"}`
      );
      setWeather(response);
    } catch (error) {
      console.log("it is failed", error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };
  return (
    <div className="container">
      Weather
      <input
        type="text"
        placeholder="Enter City"
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Get Weather</button>
      {weather && (
        <>
          <div className="weather-info">
            <h1>{weather.data.name}</h1>
            <p>Temp:{weather.data.main.temp}</p>
            <h3>{weather.data.weather[0].description}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
