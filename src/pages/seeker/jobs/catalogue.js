import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import JobSearchBox from "@/components/jobs/searchBox";

const Jobs = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://swahilipot.up.railway.app/api/fursa/opportunity/jobs/"
        );
        setJobData(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    // Filtering the jobs based on the search term
    const filtered = jobData.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <h1>Displaying list of jobs here</h1>
      <JobSearchBox onSearch={handleSearch} />
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>
            <Link href={`/seeker/jobs/${job.id}`} legacyBehavior>
              <a>{job.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
