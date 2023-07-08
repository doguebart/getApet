import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png";

const NavBar = () => {
  return (
    <Container>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Get A Pet brand image" />
        </Link>
      </div>
      <div className="nav">
        <div className="adopt">
          <Link to="/">ADOTAR</Link>
        </div>
        <div className="login">
          <Link to="/Login">ENTRAR</Link>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
