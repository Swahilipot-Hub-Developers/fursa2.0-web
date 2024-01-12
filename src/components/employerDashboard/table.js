import { useEffect, useState } from "react";
import axios from "axios";

const JobApplicationsSection = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/fursa/opportunity/jobs/"
        );
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job-applications-section">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Name</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Name of applicant</th>
            <th scope="col">View Details</th>
            
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index} className="job-table-row">
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>{job.vacancies}</td>
              <td>{job.target_number_of_applications}</td>
              <td>{job.skills_required}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsSection;