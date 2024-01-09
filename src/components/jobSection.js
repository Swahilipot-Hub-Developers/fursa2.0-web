import React from "react";

const JobSection = ({ jobs }) => {
  // Add filtering logic here

  return (
    <div className="job-section-wrapper">
      <h2>View jobs</h2>

      {/* Add filter options here */}
      <div className="filter-container">
        <label>Filter by Category:</label>
        {/* Add category filter dropdown or input field */}
      </div>
      <div className="filter-container">
        <label>Filter by Skills:</label>
        {/* Add skills filter dropdown or input field */}
      </div>
      <div className="filter-container">
        <label>Filter by Interest:</label>
        {/* Add interest filter dropdown or input field */}
      </div>

      {/* Display job list */}
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.title} className="job-item">
            <strong>{job.title}</strong>
            <p>Category: {job.category}</p>
            <p>Skills: {job.skills.join(", ")}</p>
            <p>Interest: {job.interest}</p>
            {/* Add more job details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSection;
