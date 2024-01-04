import { useState } from 'react';
import MetaTags from './Metatags';
import Sidebar from './SideBar';
import { FaBars, FaLeftLong } from 'react-icons/fa6';

const Layout = ({ children }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <>
      <MetaTags />
      <div className={`d-flex ${isSidebarMinimized ? 'sidebar-minimized' : ''}`}>
        <Sidebar isMinimized={isSidebarMinimized} />
        <main className='container content'>{children}</main>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarMinimized ? <FaLeftLong /> : <FaBars />}
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
  );
};

export default Layout;
