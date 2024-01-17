import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const JobApplicationsSection = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [skillsFilter, setSkillsFilter] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobResponse = await axios.get(
          "http://127.0.0.1:8000/api/fursa/opportunity/jobs/"
        );
        setJobData(jobResponse.data);

        const skillsResponse = await axios.get(
          "http://127.0.0.1:8000/api/fursa/skills/"
        );
        setSkillsList(skillsResponse.data);

        applyFilters();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [skillsFilter]);

  const applyFilters = () => {
    let filteredJobs = jobData;

    if (skillsFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.skills_required.title
          .toLowerCase()
          .includes(skillsFilter.toLowerCase())
      );
    }

    setFilteredJobData(filteredJobs);
  };

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
        <tbody>
          {filteredJobData.map((job, index) => (
            <tr key={index} className="job-table-row">
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>{job.vacancies}</td>
              <td>{job.target_number_of_applications}</td>
              <td>{job.skills_required.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="filter-container">
        <div>
          <label>Filter by Skill:</label>
          <select
            className="form-control"
            value={skillsFilter}
            onChange={(e) => setSkillsFilter(e.target.value)}
          >
            <option value="">Select Skill</option>
            {skillsList.map((skill, index) => (
              <option key={index} value={skill.title}>
                {skill.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}  

export default JobApplicationsSection;
