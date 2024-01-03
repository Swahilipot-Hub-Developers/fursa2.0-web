// components/JobApplications.js
import React from 'react';

const JobApplications = ({ applications }) => {
  return (
    <div>
      <h3>Job Applications</h3>
      {applications.map((application, index) => (
        <div key={index}>
          <p>Job Title: {application.jobTitle}</p>
          <p>Status: {application.status}</p>
          {/* Add more details or actions if needed */}
        </div>
      ))}
    </div>
  );
};

export default JobApplications;
