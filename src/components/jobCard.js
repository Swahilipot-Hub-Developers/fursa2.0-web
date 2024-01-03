// components/JobCard.js
import React from 'react';

const JobCard = ({ job, applicationStatus }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.description}</p>
        <p className="card-text">Application Status: {applicationStatus}</p>
        {/* Add more details or actions if needed */}
      </div>
    </div>
  );
};

export default JobCard;
