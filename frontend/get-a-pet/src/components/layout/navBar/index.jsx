import React, { useContext } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png";

import { Context } from "../../../context/UserContext";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(Context);

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
        {isAuthenticated ? (
          <span onClick={logout}>Sair</span>
        ) : (
          <>
            <div className="adopt">
              <Link to="/Register">REGISTRAR</Link>
            </div>
            <div className="login">
              <Link to="/Login">ENTRAR</Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default NavBar;
