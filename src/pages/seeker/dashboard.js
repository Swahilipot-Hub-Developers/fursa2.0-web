import JobApplicationsSection from "@/components/jobs/jobList";
import JobView from "@/components/jobs/jobView";

const Dashboard = () => {
  return (
    <div className="my-4">
      <JobView />
      <JobApplicationsSection />
    </div>
  );
};

export default Dashboard;
<JobView />;
