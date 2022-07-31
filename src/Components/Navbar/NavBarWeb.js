import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/log1.svg';
import { useState,useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router
} from "react-router-dom";


function NavBarWeb() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Router>
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
      <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
            
          </Navbar.Brand>
          <Navbar.Toggle className='toggler-icon-set'>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="setNav">
          
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link underline' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Hidden Gems</Nav.Link>
            <Nav.Link href="#planner" className={activeLink === 'planner' ? 'active navbar-link underline' : 'navbar-link'} onClick={() => onUpdateActiveLink('planner')}>Planner</Nav.Link>
            <Nav.Link href="#deals" className={activeLink === 'deals' ? 'active navbar-link underline' : 'navbar-link'} onClick={() => onUpdateActiveLink('deals')}>Deals</Nav.Link>
           
            
          </Nav>
          {/* <Nav>

          </Nav> */}
          <Nav >
            
            <Nav.Link eventKey={2} href="#memes" >
            <Button  variant="success" className='button-size'>Download </Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

export default NavBarWeb;