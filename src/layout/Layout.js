import { useState } from 'react';
import MetaTags from './Metatags';
import Sidebar from './SideBar';
import { FaBars, FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const router = useRouter()

  if (router.pathname === '/'){
    return(
      <>
        <MetaTags />
        <NavBar />
        <main className='container'>{children}</main>
      </>
    )
  } else {
    return (
      <>
        <MetaTags />
        <div className={`d-flex ${isSidebarMinimized ? 'sidebar-minimized' : ''}`}>
          <Sidebar isMinimized={isSidebarMinimized} />
          <main className='container content'>{children}</main>
          <button className="toggle-button" onClick={toggleSidebar}>
            {isSidebarMinimized ? <FaBars /> : <FaLeftLong />}
          </button>
        </div>
        {/**Custom d-flex for the sidebar functionality to avoid intefering
         * with the other 'd-flex' class pre-defined by Bootstrap.
         */}
        <style jsx>{`
          .d-flex {
            transition: margin-left 0.3s;
          }
        `}</style>
      </>
    )
  }
};

export default Layout;
