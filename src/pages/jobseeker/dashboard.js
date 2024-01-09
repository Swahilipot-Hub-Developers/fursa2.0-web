// pages/jobseeker/dashboard.js
import React from "react";
import JobSection from "../../components/jobSection";
import JobView from "../../components/jobView";
import JobApplicationsSection from "../../components/jobApplications";

const Dashboard = () => {
  // Mock data
  const mockJobs = [
    {
      title: "Job 1",
      category: "Category A",
      skills: ["Skill A", "Skill B"],
      interest: "Interest A",
    },
    {
      title: "Job 2",
      category: "Category B",
      skills: ["Skill C", "Skill D"],
      interest: "Interest B",
    },
    // Add more mock jobs as needed
  ];

  const mockJobApplications = [
    { jobTitle: "Job 1", status: "Applied" },
    { jobTitle: "Job 2", status: "Pending" },
    // Add more mock job applications as needed
  ];

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <JobView />
      <JobSection jobs={mockJobs} />
      <JobApplicationsSection applications={mockJobApplications} />
    </div>
  );
};

export default Dashboard;
