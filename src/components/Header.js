import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Sport shop</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Main
            </NavLink>
            <NavLink to="/home">
              <Button variant="warning" onClick={handleShow}>
                Responses
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Responses
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Response 1</Accordion.Header>
                      <Accordion.Body>Not bad.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Response 2</Accordion.Header>
                      <Accordion.Body>
                        Well Well Well. The products are unbelievable!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Response 3</Accordion.Header>
                      <Accordion.Body>Master of pupets</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Response 4</Accordion.Header>
                      <Accordion.Body>Wouvie</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Offcanvas.Body>
              </Offcanvas>
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <h1 align="center">Yo! Welcome to our shop!!!</h1>
    </div>
  );
}
