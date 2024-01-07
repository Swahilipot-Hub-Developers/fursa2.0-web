import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-3 border-bottom shadow-sm">
      <Navbar.Brand href="/">
        <Image
          src="/logo/Fursa Logo 2.png"
          height={50}
          width={100}
          alt="Swahilipot Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Partnerships</Nav.Link>
          <Nav.Link href="/profile">Create an Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
