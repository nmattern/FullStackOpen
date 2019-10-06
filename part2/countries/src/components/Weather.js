import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      <h3>Weather in {weather.location.name}</h3>
      <p>
        <strong>temperature: </strong>
        {weather.current.temperature} Celsius
      </p>
      <img
        src={`${weather.current.weather_icons[0]}`}
        alt="Weather symbol"
      ></img>
      <p>
        <strong>wind: </strong>
        {weather.current.wind_speed} kph direction {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
