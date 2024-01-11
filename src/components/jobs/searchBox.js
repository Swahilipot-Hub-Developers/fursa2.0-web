import { useState } from "react";

const JobSearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="input-group gap-2 mb-3">
      <input
        type="text"
        placeholder="Search jobs..."
        className="form-control"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearchBox;
