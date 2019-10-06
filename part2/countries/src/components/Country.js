import React, { useState, useEffect } from "react";
import axios from "axios";
import Langauges from "./Languages";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [showResults, setShowResults] = useState(false);

  const [weather, setWeather] = useState([]);
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.name}`;

  const hook = () => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log("Error", error.message);
      });
  };
  useEffect(hook, []);

  const handleShowClick = () => {
    setShowResults(!showResults);
  };
  if (showResults === true) {
    return (
      <>
        <div>
          <h2>
            {country.name} <button onClick={handleShowClick}>show</button>
          </h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>langauges</h3>
          <ul>
            <Langauges country={country} />
          </ul>
          <img
            src={`${country.flag}`}
            alt={`flag of ${country.name}`}
            height="150"
            width="150"
          ></img>
          <Weather weather={weather} />
        </div>
      </>
    );
  } else {
    return (
      <p>
        {country.name} <button onClick={handleShowClick}>show</button>
      </p>
    );
  }
};

export default Country;
