import SkillsList from '@/components/employerDashboard/skillsList';
import React, { useState } from 'react';

const CreateSkills = () => {
  const [formData, setFormData] = useState({
    title: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/fursa/skills/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create skill');
      }

      // Handle successful response as needed
      console.log('Skill created successfully');
    } catch (error) {
      // Handle error
      console.error('Error creating skill:', error.message);
    }
  };

  return (
    <div className="my-4">
      <div>
        <h2>Add a Skill</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Skill:</label>
        <input
          type="text"
          className="form-control"
          name="skill"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
      <div>
        <SkillsList/>
      </div>
    </div>
  );
};

export default CreateSkills;
