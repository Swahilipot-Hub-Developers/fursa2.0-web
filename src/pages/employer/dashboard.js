import Header from '@/components/employerDashboard/header';
import Table from '@/components/employerDashboard/table';
import cardsList from '@/components/employerDashboard/cardsList';

const Dashboard = () => {
  return (
    <div>
      
        <Header/>
        <cardsList/>
        <Table/>
        
      </div>
    
  );
};

export default Dashboard;

