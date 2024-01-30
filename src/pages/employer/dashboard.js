import EmployerTable from '@/components/employerDashboard/applicationTable';
import CardsList from '@/components/employerDashboard/cardsList';
import Header from '@/components/employerDashboard/dashMsg';

const Dashboard = () => {
  return (
    <div className="my-4">      
      <Header/>
      <CardsList/>
      <EmployerTable/>
    </div>
  );
};

export default Dashboard;

