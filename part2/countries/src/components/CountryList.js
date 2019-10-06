import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

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
    return countries.map((country, i) => <Country key={i} country={country} />);
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else {
    return null;
  }
};

export default Countries;
