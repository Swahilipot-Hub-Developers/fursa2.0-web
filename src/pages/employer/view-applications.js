import { useState } from "react";

const mockApplicationsData = [
  {
    id: 1,
    jobName: "Software Engineer",
    applicationName: "John Doe",
    status: "Pending",
  },
  {
    id: 2,
    jobName: "Data Scientist",
    applicationName: "Jane Smith",
    status: "Approved",
  },
  {
    id: 3,
    jobName: "UX Designer",
    applicationName: "Bob Johnson",
    status: "Rejected",
  },
];

const ViewApplicationsPage = () => {
  const [applicationsData, setApplicationsData] = useState(mockApplicationsData);

  const handleStatusChange = (id, newStatus) => {
    // Update the status in the UI
    const updatedApplications = applicationsData.map((application) =>
      application.id === id ? { ...application, status: newStatus } : application
    );
    setApplicationsData(updatedApplications);

    //axios.post to an API endpoint
    // axios.post(`/api/fursa/jobs/${id}`, { status: newStatus });
  };

  return (
    <div className="my-4">
      <h2>View Applications</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Name</th>
            <th scope="col">Application Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {applicationsData.map((application) => (
            <tr key={application.id}>
              <td>{application.jobName}</td>
              <td>{application.applicationName}</td>
              <td>
                <select
                  value={application.status}
                  onChange={(e) => handleStatusChange(application.id, e.target.value)}
                  className="form-control-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicationsPage;
