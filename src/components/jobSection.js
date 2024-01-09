import React, { useState } from "react";

const JobSection = ({ jobs }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [interestFilter, setInterestFilter] = useState('');

  // Filtering logic
  const filteredJobs = jobs
    .filter(job => !categoryFilter || job.category === categoryFilter)
    .filter(job => !skillsFilter || job.skills.includes(skillsFilter))
    .filter(job => !interestFilter || job.interest === interestFilter);

  return (
    <div className="job-section-wrapper">
      <h2>View jobs</h2>

      {/* Filter by Category */}
      <div className="filter-container">
        <label>Filter by Category:</label>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          {/* Add options dynamically based on your data */}
        </select>
      </div>

      {/* Filter by Skills */}
      <div className="filter-container">
        <label>Filter by Skills:</label>
        <select value={skillsFilter} onChange={(e) => setSkillsFilter(e.target.value)}>
          <option value="">All Skills</option>
          {/* Add options dynamically based on your data */}
        </select>
      </div>

      {/* Filter by Interest */}
      <div className="filter-container">
        <label>Filter by Interest:</label>
        <select value={interestFilter} onChange={(e) => setInterestFilter(e.target.value)}>
          <option value="">All Interests</option>
          {/* Add options dynamically based on your data */}
        </select>
      </div>

      {/* Display filtered job list */}
      <ul className="job-list">
        {filteredJobs.map((job) => (
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
