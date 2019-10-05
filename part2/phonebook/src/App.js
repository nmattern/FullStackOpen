import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const hook = () => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);
  const [newFilter, setNewFilter] = useState("");
  // Filter the persons array based on the value set in the filter input
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <PersonList persons={filteredPersons} />
    </div>
  );
};

export default App;
