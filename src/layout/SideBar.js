// components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/trending">Trending</Nav.Link>
      <Nav.Link href="/subscriptions">Subscriptions</Nav.Link>
      {/* Add more links as needed */}
    </Nav>
  );
};

export default Sidebar;
