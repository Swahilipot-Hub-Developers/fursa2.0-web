import { useEffect, useState } from "react";
import axios from "axios";

const EmployerTable = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobResponse = await axios.get(
          "http://127.0.0.1:8000/api/fursa/opportunity/jobs/"
        );
        setJobData(jobResponse.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Name</th>
            <th scope="col">Location</th>
            <th scope="col">Type</th>
            <th scope="col">Skills</th>
            <th scope="col">Expected applications</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index} className="job-table-row">
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>{job.skills_required}</td>
              <td>{job.target_number_of_applications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerTable;
