import { useEffect, useState } from "react";
import axios from "axios";

const SkillsList = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/fursa/skills/"
        );
        setSkillsData(response.data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkillsData();
  }, []);

  return (
    <div className="mt-3">
      <h2>Existing Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
