import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Description Column */}
          <Col lg="3" md="6" sm="12"> {/* Takes 3 on large, 6 on medium, full width on small */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, magnam!
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i> {/* Changed class to className */}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i> {/* Changed class to className */}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i> {/* Changed class to className */}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i> {/* Changed class to className */}
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Discover Links Column */}
          <Col lg="3" md="6" sm="12"> {/* Takes 3 on large, 6 on medium, full width on small */}
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links Column */}
          <Col lg="3" md="6" sm="12"> {/* Takes 3 on large, 6 on medium, full width on small */}
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Info Column */}
          <Col lg="3" md="6" sm="12"> {/* Takes 3 on large, 6 on medium, full width on small */}
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i> {/* Changed class to className */}
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Tech Titans , India</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i> {/* Changed class to className */}
                  </span>
                  Email:
                </h6>
                <p className="mb-0">paliwalnishant0@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i> {/* Changed class to className */}
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Copyright Column */}
          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">copyright {year}, design and develop by Teach Titans. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
