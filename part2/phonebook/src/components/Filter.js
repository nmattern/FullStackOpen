import React from "react";

const Filter = ({ newFilter, setNewFilter }) => {
  // Upate Input on text change
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
