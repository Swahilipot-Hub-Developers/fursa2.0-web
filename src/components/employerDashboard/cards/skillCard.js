import { useEffect, useState } from "react";
import axios from "axios";

const SkillNum = () => {
  const [totalSkills, setTotalSkills] = useState(0);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/fursa/skills/"
        );
        setTotalSkills(response.data.length);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkillsData();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-5">{totalSkills}</h5>
        <p className="card-text">Total Skills</p>
      </div>
    </div>
  );
};

export default SkillNum;
