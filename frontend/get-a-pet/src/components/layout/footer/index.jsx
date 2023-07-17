import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="footer-column">
        <h2>ADOÇÃO</h2>
        <Link to="#" id="link">COMO FUNCIONA?</Link>
        <Link to="#" id="link">ANIMAIS DISPONÍVEIS</Link>
      </div>
      <div className="footer-column">
        <h2>COMO AJUDAR?</h2>
        <Link to="#" id="link">DOAÇÕES</Link>
        <Link to="#" id="link">VOLUNTARIADO</Link>
        <Link to="#" id="link">COMPARTILHE NAS REDES SOCIAIS</Link>
      </div>
      <div className="footer-column">
        <h2>EVENTOS</h2>
        <Link to="#" id="link">
          FIQUE POR DENTRO DOS PRÓXIMOS EVENTOS E ATIVIDADES RELACIONADOS À
          ADOÇÃO DE PETS.
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
