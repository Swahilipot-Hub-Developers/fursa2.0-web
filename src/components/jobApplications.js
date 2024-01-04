// components/JobApplicationsSection.js
import React from 'react';
import styled from 'styled-components';

const JobApplicationsSectionWrapper = styled.div`
  /* Add your JobApplicationsSection styles here */
`;

const ApplicationList = styled.ul`
  /* Add application list styles here */
`;

const ApplicationItem = styled.li`
  /* Add application item styles here */
`;

const JobApplicationsSection = ({ applications }) => {
  return (
    <JobApplicationsSectionWrapper>
      <h2>View job applications and their status</h2>

      {/* Display application list */}
      <ApplicationList>
        {applications.map((application) => (
          <ApplicationItem key={application.jobTitle}>
            <strong>{application.jobTitle}</strong>
            <p>Status: {application.status}</p>
            {/* Add more application details as needed */}
          </ApplicationItem>
        ))}
      </ApplicationList>
    </JobApplicationsSectionWrapper>
  );
};

export default JobApplicationsSection;
