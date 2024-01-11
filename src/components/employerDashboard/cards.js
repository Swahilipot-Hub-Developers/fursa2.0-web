import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
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

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {jobData &&
        jobData.map((jobItem, index) => (
          <div key={index} className="col mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{jobItem.title}</h5>
                <p className="card-text">{jobItem.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;