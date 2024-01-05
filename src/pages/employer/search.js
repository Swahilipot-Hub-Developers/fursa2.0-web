import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce'; // Import debounce function from lodash

const Search = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const debouncedFilterChange = debounce((value) => {
    setFilter(value);
  }, 300); // Adjust the delay time as needed (300ms here)

  return (
    <div>
        <h3>Search </h3>
      <input className="mt-2"type="text" onChange={(e) => debouncedFilterChange(e.target.value)} />
      {/* Other job view components */}
    </div>
  );
};

export default Search;