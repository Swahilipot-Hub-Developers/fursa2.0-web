import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/fursa/opportunity/jobs/${id}`
        );
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!jobData) {
    return <div>Loading...</div>;
  }

  const skillsArray = Array.isArray(jobData.skills_required)
    ? jobData.skills_required
    : typeof jobData.skills_required === 'string'
    ? jobData.skills_required.split(', ')
    : [];

  return (
    <div className="my-5">
      <h1>{jobData.title}</h1>
      <div className="text-muted d-flex flex-md-row flex-column gap-md-4 mb-4">
        <p className="m-0">Location: {jobData.location}</p>
        <p className="m-0">Type: {jobData.type}</p>
        <p className="m-0">Vacancies: {jobData.vacancies}</p>
        <p className="m-0">Applications: {jobData.target_number_of_applications}</p>  
      </div>
      <h5>Job Description</h5>
      <p>{jobData.description}</p>
      <p>
        Skills Required: <br />
        {skillsArray.map((skill, index) => (
          <span key={index}>
            {skill}
            {index < skillsArray.length - 1 && <>&nbsp;&nbsp;&nbsp;</>}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SingleJob;
