import { useState } from 'react';

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    vacancies: '',
    target_number_of_applications: '',
    employer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/fursa/jobs/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }

      // Handle successful response as needed
      console.log('Job created successfully');
    } catch (error) {
      // Handle error
      console.error('Error creating job:', error.message);
    }
  };

  return (
    <div className="my-4">
        <h1>Create a job</h1>
        <form onSubmit={handleSubmit}>
      <label>
        Title:
      </label>
      <input type="text"  name="title" value={formData.title} onChange={handleChange} className="form-control" required />

      <label>
        Job Description:
      </label>
      <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />

      <label>
        Job Location:
      </label>
      <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />

      <label>
        Vacancies:
      </label>
      <input type="number" className="form-control" name="vacancies" value={formData.vacancies} onChange={handleChange} required />

      <label>
        Target Number of Applications:
      </label>
        <input
          type="number"
          className="form-control"
          name="target_number_of_applications"
          value={formData.target_number_of_applications}
          onChange={handleChange}
          required
        />

      <label>
        Employer: (Enter the PK value for your object (actual obstruction))
      </label>
      <input type="text" className="form-control" name="employer" value={formData.employer} onChange={handleChange} required />

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default CreateJob;
