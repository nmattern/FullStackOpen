import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const rows = () =>
    persons.map(person => (
      <Person key={person.id} name={person.name} number={person.number} />
    ));

  const addPerson = event => {
    event.preventDefault();
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleNameFilter = event => setNewFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with{" "}
        <input value={newFilter} onChange={handleNameFilter} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{rows()}</div>
    </div>
  );
};

export default App;
