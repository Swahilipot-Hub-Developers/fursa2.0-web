// pages/dashboard.js
import React from "react";
import { useSession } from "next-auth/react";
import JobView from "../../components/jobView";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to sign in first</p>;
  }

  return (
    <div>
      <h1>Welcome to your dashboard, {session.user.name}!</h1>
      <JobView />
    </div>
  );
};

export default Dashboard;
