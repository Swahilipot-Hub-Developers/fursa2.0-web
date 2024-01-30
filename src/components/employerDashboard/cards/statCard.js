import React, { useEffect, useState } from "react";
import axios from "axios";

const StatCard = () => {
  const [jobData, setJobData] = useState(null);

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

  const jobCount = jobData ? jobData.length : 0;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-5">{jobCount}</h5>
        <p className="card-text">Total jobs created</p>
      </div>
    </div>
  );
};

export default StatCard;
