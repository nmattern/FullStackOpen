import React from "react";

// return a set of p tags with the persons values mapped to them
const PersonList = ({ persons }) => {
  return persons.map(person => (
    <p key={person.id}>
      {person.name} {person.number}{" "}
    </p>
  ));
};

export default PersonList;
