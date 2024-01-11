import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Sidebar = ({ isMinimized }) => {
  const router = useRouter();
  const userType = router.pathname.startsWith('/employer') ? 'employer' : 'seeker';

  const sidebarItems = userType === 'employer'
    ? [
        { href: '/employer/dashboard', label: 'Dashboard' },
        { href: '/employer/jobs', label: 'Jobs' },
      ]
    : [
        { href: '/seeker/dashboard', label: 'Dashboard' },
        { href: '/seeker/jobs/catalogue', label: 'Jobs' },
      ];

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
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
  );
};

export default Sidebar;
