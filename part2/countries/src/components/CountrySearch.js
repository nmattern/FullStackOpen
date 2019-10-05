import React from "react";

const CountrySearch = ({ searchFilter, setSearchFilter }) => {
  const handleSearchFilter = event => {
    setSearchFilter(event.target.value);
  };
  return (
    <p>
      find countries{" "}
      <input value={searchFilter} onChange={handleSearchFilter} />
    </p>
  );
};

export default CountrySearch;
