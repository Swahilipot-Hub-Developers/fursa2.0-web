import JobView from "../../components/jobView";
import JobSection from "../../components/jobSection";
import JobApplicationsSection from "../../components/jobApplications";
import JobCard from "@/components/jobCard";

const Dashboard = () => {

  return (
    <>
      <h1>Welcome to your dashboard!</h1>
      <JobView />
      <JobCard/>
      {/*<JobSection />*/}
      <JobApplicationsSection />
    </>
  );
};

export default Dashboard;
