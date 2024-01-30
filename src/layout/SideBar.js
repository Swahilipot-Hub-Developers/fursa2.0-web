import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Sidebar = ({ isMinimized }) => {
  const router = useRouter();
  const userType = router.pathname.startsWith('/employer') ? 'employer' : 'seeker';
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsOffcanvasOpen(window.innerWidth > 768 && isOffcanvasOpen);
    };

    window.addEventListener('resize', handleResize);
    setIsOffcanvasOpen(window.innerWidth > 768);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOffcanvasOpen]);

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
        { href: '/seeker/view-applications', label: 'View Applications'},
        { href: '/seeker/apply-job', label: 'Apply for a job' },
      ];

  return (
    <>
      <div className={`sidebar shadow ${isMinimized ? 'minimized' : ''} ${isOffcanvasOpen ? 'open' : ''}`}>
        <ListGroup variant="flush" className="mt-3">
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
