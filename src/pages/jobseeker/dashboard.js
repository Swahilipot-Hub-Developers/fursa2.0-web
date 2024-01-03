// pages/jobseeker/dashboard.js
import React from "react";
import { useSession } from "next-auth/react";
import JobView from "../../components/jobView"; // Correct import path
import JobApplications from "../../components/jobApplications"; // Correct import path

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to sign in first</p>;
  }

  const mockJobApplications = [
    { jobTitle: "Job 1", status: "Applied" },
    { jobTitle: "Job 2", status: "Pending" },
    // Add more mock job applications as needed
  ];

  return (
    <div>
      <h1>Welcome to your dashboard, {session.user.name}!</h1>
      <JobView />
      <JobApplications applications={mockJobApplications} />
    </div>
  );
};

export default Dashboard;
