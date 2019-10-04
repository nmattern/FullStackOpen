import React, { useState } from "react";

const Filter = ({ newFilter, setNewFilter }) => {
  const handleNameFilter = event => {
    setNewFilter(event.target.value);
  };

  return (
    <>
      <p>
        filter shown with{" "}
        <input value={newFilter} onChange={handleNameFilter} />
      </p>
    </>
  );
};

export default Filter;
