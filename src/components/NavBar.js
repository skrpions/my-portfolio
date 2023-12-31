import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/wolf.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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

  const handleDownloadCV = () => {
    window.location.href = "https://drive.usercontent.google.com/download?id=1ZdGB3Rj5KZMqdH3t-ztE1WfsZN4Sora0&export=download&authuser=0&confirm=t&uuid=f6b60129-b3eb-484d-8d55-75e2d9bab8c0&at=APZUnTX6mOYESajivM_fS6wGG1vD:1691861253566";
  };

  // https://drive.usercontent.google.com/download?id=1ZdGB3Rj5KZMqdH3t-ztE1WfsZN4Sora0&export=download&authuser=0&confirm=t&uuid=f6b60129-b3eb-484d-8d55-75e2d9bab8c0&at=APZUnTX6mOYESajivM_fS6wGG1vD:1691861253566

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nestor-mart%C3%ADnez-c-751232209/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/skrpions" target="_blank"><img src={navIcon2} alt="" /></a>
                {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
              
              <button className="vvd" onClick={handleDownloadCV}>
      <span>Download CV</span>
    </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
