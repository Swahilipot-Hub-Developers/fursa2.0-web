// Import necessary modules
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Location</th>
            <th scope="col">Type</th>
            <th scope="col">Vacancies</th>
            <th scope="col">Applications</th>
            <th scope="col">Skills Required</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index} className="job-table-row">
              <td>
                <Link href={`/seeker/jobs/${job.id}`} legacyBehavior>
                  <a>{job.title}</a>
                </Link>
              </td>
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
