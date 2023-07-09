import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import dog from "../../assets/image/dog.png";
import bgImage from "../../assets/image/Rectangle.png";

function Home() {
  return (
    <Container>
      <section className="section-1">
        <div className="background-image">
          <img src={bgImage} alt="Dog image" />
        </div>
        <h1>Adote amor: encontre seu companheiro peludo!</h1>
      </section>
      <section className="section-3">
        <div className="content-container">
          <h2>É UM DOADOR?</h2>
          <p>
            Nossos incríveis doadores são verdadeiros heróis, ajudando a
            transformar a vida de animais em busca de um lar amoroso. Com sua
            generosidade, garantimos cuidados, alimentação e uma nova chance
            para esses pets. Junte-se a nós e faça parte dessa causa
            transformadora!
          </p>
          <Link to="/">QUERO DOAR</Link>
        </div>
        <div className="image-container">
          <img src={dog} alt="dog image" />
        </div>
      </section>
    </Container>
  );
}

export default Home;
