import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="footer-column">
        <h2>ADOÇÃO</h2>
        <Link to="#">COMO FUNCIONA?</Link>
        <Link to="#">ANIMAIS DISPONÍVEIS</Link>
      </div>
      <div className="footer-column">
        <h2>COMO AJUDAR?</h2>
        <Link to="#">DOAÇÕES</Link>
        <Link to="#">VOLUNTARIADO</Link>
        <Link to="#">COMPARTILHE NAS REDES SOCIAIS</Link>
      </div>
      <div className="footer-column">
        <h2>EVENTOS</h2>
        <Link to="#">
          FIQUE POR DENTRO DOS PRÓXIMOS EVENTOS E ATIVIDADES RELACIONADOS À
          ADOÇÃO DE PETS.
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
