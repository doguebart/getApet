import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import logo from "../../../assets/image/logo.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { Context } from "../../../context/UserContext";

const LogoImage = styled.img`
  max-width: 50px;
`;

const CustomNavbar = styled(Navbar)`
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const CustomCollapse = styled(Navbar.Collapse)`
  padding: 10px;
`;

const CustomMenuIcon = styled(HiMenu)`
  stroke: none;
  fill: currentColor;
  border: none;
`;

const NavBarComponent = () => {
  const { isAuthenticated, logout } = useContext(Context);

  return (
    <CustomNavbar expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/">
          <LogoImage src={logo} alt="Get A Pet brand image" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <CustomMenuIcon />
      </Navbar.Toggle>
      <CustomCollapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link mr-3">
            ADOTAR
          </Link>
        </Nav>
        <Nav className="ml-auto mr-0">
          {isAuthenticated ? (
            <>
              <Link to="/DashBoard" className="nav-link mr-3">
                PERFIL
              </Link>
              <Link to="/UserPets" className="nav-link mr-3">
                PETS
              </Link>
              <Link to="/pet/myadoptions" className="nav-link mr-3">
                ADOÇÕES
              </Link>
              <span className="nav-link" onClick={logout}>
                SAIR
              </span>
            </>
          ) : (
            <>
              <Link to="/Register" className="nav-link ml-3">
                REGISTRAR
              </Link>
              <Link to="/Login" className="nav-link">
                ENTRAR
              </Link>
            </>
          )}
        </Nav>
      </CustomCollapse>
    </CustomNavbar>
  );
};

export default NavBarComponent;
