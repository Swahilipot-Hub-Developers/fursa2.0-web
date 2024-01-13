import Link from 'next/link';
import { ListGroup, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Sidebar = ({ isMinimized, toggleSidebar }) => {
  const router = useRouter();
  const userType = router.pathname.startsWith('/employer') ? 'employer' : 'seeker';
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsOffcanvasOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sidebarItems = userType === 'employer'
    ? [
        { href: '/employer/dashboard', label: 'Dashboard' },
        { href: '/employer/create-job', label: 'Create job' },
        { href: '/employer/create-skills', label: 'Create Skills'},
        { href: '/employer/view-applications', label: 'View Applications'},
      ]
    : [
        { href: '/seeker/dashboard', label: 'Dashboard' },
        { href: '/seeker/jobs/catalogue', label: 'Jobs' },
      ];

  return (
    <>
      <div className={`sidebar ${isMinimized ? 'minimized' : ''} ${isOffcanvasOpen ? 'open' : ''}`}>
        <ListGroup className="mt-3">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <ListGroup.Item
                action
                active={router.pathname === item.href}
              >
                {item.label}
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Sidebar;
