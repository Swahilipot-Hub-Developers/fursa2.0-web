import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-3 border-bottom sticky-top shadow-sm">
      <Navbar.Brand href="/">
        <Image
          src="/logo/Fursa logo 2.png"
          height={50}
          width={100}
          alt="Fursa Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="ml-auto gap-2">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Partnerships</Nav.Link>
          <Nav.Link href="/profile" >Sign In</Nav.Link>
          <a href="/profile" className="m-0 p-0">
            <button className="btn btn-success p-2">
              Create an account
            </button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
