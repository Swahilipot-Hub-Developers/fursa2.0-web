// pages/jobseeker/dashboard.js
import React from 'react';
// import { useSession } from 'next-auth/react';
import JobView from '../../components/jobView'; // Correct import path
import JobApplications from '../../components/jobApplications'; // Correct import path

const Dashboard = () => {
  // Commenting out the useSession hook for testing purposes
  // const { data: session } = useSession();

  // For testing purposes, mock the user data
  const mockUser = {
    name: 'John Doe',
    // Add more user data as needed
  };

  // Mock job applications data
  const mockJobApplications = [
    { jobTitle: 'Job 1', status: 'Applied' },
    { jobTitle: 'Job 2', status: 'Pending' },
    // Add more mock job applications as needed
  ];

  // For testing purposes, use the mockUser data
  const userName = mockUser.name;

  // Display the dashboard content
  return (
    <div>
      {/* For testing purposes, display the user name */}
      <h1>Welcome to your dashboard, {userName}!</h1>
      <JobView />
      <JobApplications applications={mockJobApplications} />
    </div>
  );
};

export default Dashboard;
