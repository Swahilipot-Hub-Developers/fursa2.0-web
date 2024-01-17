import { useState } from "react";

const mockApplicationsData = [
  {
    id: 1,
    jobName: "Software Engineer",
    employerName: "John Doe",
    status: "Pending",
  },
  {
    id: 2,
    jobName: "Data Scientist",
    employerName: "Jane Smith",
    status: "Approved",
  },
  {
    id: 3,
    jobName: "UX Designer",
    employerName: "Bob Johnson",
    status: "Rejected",
  },
];

const ViewApplicationsPage = () => {
  const [applicationsData, setApplicationsData] = useState(mockApplicationsData);

  return (
    <div>
      <h2>View Applications</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Name</th>
            <th scope="col">Employer Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {applicationsData.map((employer) => (
            <tr key={employer.id}>
              <td>{employer.jobName}</td>
              <td>{employer.employerName}</td>
              <td>{employer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicationsPage;
