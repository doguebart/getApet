import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import api from "../../utils/api";

import dog from "../../assets/image/dog.png";
import bgImage from "../../assets/image/Rectangle.png";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api
      .get("/pets")
      .then((response) => setPets(response.data.pets))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(pets);
  return (
    <Container>
      <section className="section-1">
        <div className="background-image">
          <img src={bgImage} alt="Dog image" />
        </div>
        <h1>Adote amor: encontre seu companheiro peludo!</h1>
      </section>
      <section className="section-2">
        <h2>ANIMAIS DISPONÍVEIS</h2>

        <div className="cards-container">
          {pets.map((pet) => (
            <div className="card">
              <div className="img-container">
                <img
                  src={`https://getapet-api-0915272b9344.herokuapp.com/images/pets/${pet.images[0]}`}
                  alt={pet.name}
                />
              </div>
              <div className="text-content-container">
                <span id="name">{pet.name}</span>
                <div className="text-content">
                  <span id="dog-infos-title">Idade</span>
                  <span id="age">{pet.age} anos</span>
                </div>
                <div className="text-content">
                  <span id="dog-infos-title">Peso</span>
                  <span id="weight">{pet.weight}kg</span>
                  <div
                    className={`text-content ${
                      pet.sex === "Fêmea" ? "female" : "male"
                    }`}
                  >
                    <span id="dog-infos-title">Sexo</span>
                    <span id="sex">{pet.sex}</span>
                  </div>
                  {pet.available ? (
                    <Link to={`/pet/${pet._id}`}>SABER MAIS</Link>
                  ) : (
                    <p id="adopted-text">Adotado!</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
