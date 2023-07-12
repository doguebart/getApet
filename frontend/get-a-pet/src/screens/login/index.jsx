import { React, useState, useContext } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import Input from "../../components/form/inputs";
import Button from "../../components/form/button";

import dog from "../../assets/image/AuthDogLogin.jpg";

import { Context } from "../../context/UserContext";
import Message from "../../components/layout/message";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(user);
  };

  return (
    <Container>
      <div className="img-container">
        <img src={dog} alt="auth dog image" />
      </div>

      <div className="content">
        <Message />
        <div className="form-container">
          <h2>Entrar</h2>

          <form>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="E-MAIL"
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="SENHA"
            />
            <span>
              Ainda não tem uma conta? <Link to="/Register">Criar</Link>
            </span>
            <Button onClick={handleSubmit}>entrar</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
