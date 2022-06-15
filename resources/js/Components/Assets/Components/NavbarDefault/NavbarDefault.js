import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import "../NavbarDefault/NavbarDefault.css";
import logoWrap from "../../Img/logo.jpeg";

export const NavbarDefault = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/Testi",
      name: "Testimoni",
    },
    {
      path: "/service",
      name: "Service",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/track your shoes",
      name: "Track your shoes",
    },
  ];

  return (
    <div className="navbarTop">
      <Navbar className="navbar-1" fixed="top" bg="-*" expand="lg">
        <Container>
        <Navbar.Brand href="#home" className="brand">
      <img
        src={logoWrap}
        width="60"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuData.map((item) => (
                <NavLink to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))}
            </Nav>
            <Nav className="ms-auto">
              <button className="btn btn-success">Sign Up</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
