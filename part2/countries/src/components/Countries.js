import React, { useState, useEffect } from "react";
import axios from "axios";
import Langauges from "./Languages";

const Countries = ({ searchFilter }) => {
  const [countries, setCountries] = useState([]);

  const hook = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchFilter}`)
      .then(response => {
        setCountries(response.data);
      })
      .catch(function(error) {
        console.log("Error", error.message);
      });
  };
  useEffect(hook, [searchFilter]);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length > 1 && countries.length < 10) {
    return countries.map(country => (
      <p key={country.numericCode}>{country.name} </p>
    ));
  } else if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name}</h2>
        <p>capital {countries[0].capital}</p>
        <p>population {countries[0].population}</p>
        <h3>langauges</h3>
        <ul>
          <Langauges country={countries[0]} />
        </ul>
        <img
          src={`${countries[0].flag}`}
          alt={`flag of ${countries[0].name}`}
          height="150"
          width="150"
        ></img>
      </div>
    );
  } else {
    return null;
  }
};

export default Countries;
