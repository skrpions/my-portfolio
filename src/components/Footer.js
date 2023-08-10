import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/wolf.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const currentDate = new Date();
const year = currentDate.getFullYear();

export const Footer = () => {
  return (
    
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
  
      <hr></hr>
          <Col size={12} sm={12} className="text-center text-sm-center">
            {<div className="social-icon">
              <a href="https://www.linkedin.com/in/nestor-mart%C3%ADnez-c-751232209/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/skrpions" target="_blank"><img src={navIcon2} alt="" /></a>
              
            </div>}
            <p> By Nestor Martínez | © {year} | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
