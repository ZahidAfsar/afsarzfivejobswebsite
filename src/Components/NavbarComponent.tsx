import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomePng from './Assets/Home-01-512.webp'
import PdfPng from './Assets/1945929.png'
import { Link } from 'react-router-dom';
import './Style/Styles.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className='navText'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to='/'>
          <img className='Logo my-3 mx-3' src={HomePng} alt='homePng'/>
        </Nav.Link>
          <Nav className='m-auto'>
                <Nav.Link className='mx-3' as={Link} to='/Adobe'>Adobe</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Discord'>Discord</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Cisco'>Cisco</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Tesla'>Tesla</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/CodeStack'>CodeStack</Nav.Link>
          </Nav>
          <Nav.Link>
            <a href='https://docs.google.com/document/d/1Op2L1tRLZZ4lw0tp_Anym8CxvQF1ompDR_Isrmwsxjw/edit?usp=sharing' target='_blank' rel="noopener noreferrer">
            <img className='Logo mx-3 my-3' src={PdfPng} alt='Pdf Img Link' />
            </a>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
