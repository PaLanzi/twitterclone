import React, { useState, useEffect } from "react";

const Searchbar = ({ searchvalueCallback }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        placeholder="Search Twitter ..."
        onChange={(event) => setSearchValue(event.target.value)}
        searchValueCallback={searchValue}
      />
    </div>
  );
};

export default Searchbar;