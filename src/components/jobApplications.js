// components/JobApplicationsSection.js
import React from "react";

const JobApplicationsSection = ({ applications }) => {
  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
        {applications.map((application, index) => (
          <li key={index}>
            <p>Job Title: {application.jobTitle}</p>
            <p>Status: {application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplicationsSection;
