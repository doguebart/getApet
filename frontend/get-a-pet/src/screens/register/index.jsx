import { React, useContext, useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import Input from "../../components/form/inputs";
import Button from "../../components/form/button";

import dog from "../../assets/image/authDog.jpg";

import { Context } from "../../context/UserContext";
import Message from "../../components/layout/message";

function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(user);
  };

  return (
    <Container>
      <div className="img-container">
        <img src={dog} alt="auth dog image" />
      </div>

      <div className="content">
        <Message />
        <div className="form-container">
          <h2>Crie uma conta</h2>

          <form>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="NOME"
            />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="E-MAIL"
            />
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="TELEFONE"
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="NOVA SENHA"
            />
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="CONFIRME SUA SENHA"
            />
            <span>
              Já tem uma conta? <Link to="/Login">Entrar</Link>
            </span>
            <Button onClick={handleSubmit}>cadastrar</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Register;
