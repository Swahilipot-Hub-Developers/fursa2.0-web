import { useEffect, useState } from "react";
import axios from "axios";

const JobApplicationsSection = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [skillsFilter, setSkillsFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/fursa/opportunity/jobs/"
        );
        setJobData(response.data);
        applyFilters();
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [skillsFilter, categoryFilter, locationFilter]);

  const applyFilters = () => {
    let filteredJobs = jobData;

    if (skillsFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.skills_required.toLowerCase().includes(skillsFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (locationFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredJobData(filteredJobs);
  };

  return (
    <div className="job-applications-section">
      <div className="table-container">
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
            {filteredJobData.map((job, index) => (
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
      <div className="filter-container">
        <div>
          <label>Skills:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter skills"
            value={skillsFilter}
            onChange={(e) => setSkillsFilter(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default JobApplicationsSection;
