import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';

const Sidebar = ({isMinimized}) => {
  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <ListGroup className="mt-3">
        <Link href="/">
          <ListGroup.Item action active>
          Work in Progress
          </ListGroup.Item>
        </Link>
        <Link href="/about">
          <ListGroup.Item action>Work in Progress</ListGroup.Item>
        </Link>
        <Link href="/contact">
          <ListGroup.Item action>Work in Progress</ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
