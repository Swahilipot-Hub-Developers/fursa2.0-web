// pages/jobseeker/dashboard.js
import React from "react";
import JobView from "../../components/jobView";
import JobApplications from "../../components/jobApplications";

const Dashboard = () => {
  // Mock job applications data
  const mockJobApplications = [
    { jobTitle: "Job 1", status: "Applied" },
    { jobTitle: "Job 2", status: "Pending" },
    // Add more mock job applications as needed
  ];

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <JobView />
      <JobApplications applications={mockJobApplications} />
    </div>
  );
};

export default Dashboard;
