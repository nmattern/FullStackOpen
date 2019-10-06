import React, { useState } from "react";
import CountryList from "./components/CountryList";
import CountrySearch from "./components/CountrySearch";

const App = () => {
  const [searchFilter, setSearchFilter] = useState([]);
  return (
    <div>
      <CountrySearch
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <CountryList searchFilter={searchFilter} />
    </div>
  );
};

export default App;
