import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center pt-4">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/suman-chachra-7a8318282/" aria-label="LinkedIn">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/designs.by.suman" aria-label="Facebook">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/designs.by.suman/" aria-label="Instagram">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
