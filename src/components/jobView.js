// components/JobView.js
import React, { useState } from 'react';
import JobCard from './jobCard'; // Correct import path

const mockJobs = [
  { title: 'Job 1', description: 'Description for Job 1' },
  { title: 'Job 2', description: 'Description for Job 2' },
  // Add more mock jobs as needed
];

const JobView = () => {
  const [filter, setFilter] = useState(''); // State for job filtering

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredJobs = mockJobs.filter((job) =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h3>Filter Jobs</h3>
      <input
        type="text"
        placeholder="Enter filter criteria"
        value={filter}
        onChange={handleFilterChange}
      />

      <h3>Available Jobs</h3>
      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} applicationStatus="Applied" />
      ))}
      {/* Implement your job listing and filtering UI here */}
    </div>
  );
};

export default JobView;
