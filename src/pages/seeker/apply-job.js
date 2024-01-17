import React, { useState, useEffect } from "react";
import axios from "axios";

const JobApplicationPage = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [applicantName, setApplicantName] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await axios.get(
          "fursa-endpoint"
        );
        setFeaturedJobs(response.data);
      } catch (error) {
        console.error("Error fetching featured jobs:", error);
      }
    };

    fetchFeaturedJobs();
  }, []);

  const handleApplicationSubmit = () => {

  };

  return (
    <div className="my-4">
      <h2>Apply for a Job</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="jobDropdown" className="form-label">
            Featured Jobs
          </label>
          <select
            id="jobDropdown"
            className="form-select"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="" disabled selected>
              Select a job
            </option>
            {featuredJobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="applicantName" className="form-label">
            Applicant Name
          </label>
          <input
            type="text"
            className="form-control"
            id="applicantName"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="coverLetter" className="form-label">
            Cover Letter
          </label>
          <textarea
            className="form-control"
            id="coverLetter"
            rows="4"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="resume" className="form-label">
            Upload Resume
          </label>
          <input
            type="file"
            className="form-control"
            id="resume"
            value={resume}
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleApplicationSubmit}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationPage;
