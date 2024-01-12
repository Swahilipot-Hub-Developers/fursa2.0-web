import EmployerTable from '@/components/employerDashboard/applicationTable';
import CardsList from '@/components/employerDashboard/cardsList';
import Header from '@/components/employerDashboard/dashMsg';

const Dashboard = () => {
  return (
    <div>      
      <Header/>
      <CardsList/>
      <EmployerTable/>
    </div>
  );
};

export default Dashboard;

