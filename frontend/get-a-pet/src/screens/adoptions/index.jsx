import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import api from "../../utils/api";

const Adoptions = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <Container>
      <section className="section-2">
        <h2>MINHAS ADOÇÕES</h2>
        <div className="cards-container">
          {pets.map((pet) => (
            <div className="card">
              <div className="img-container">
                <img
                  src={`http://localhost:5000/images/pets/${pet.images[0]}`}
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
                  <div className="owner-infos">
                    <div className="owner-text">
                      <span id="name">{pet.user.name}</span>
                    </div>
                    <div className="owner-text">
                      <span id="owner-infos-title">Telefone</span>
                      <span id="phone">{pet.user.phone}</span>
                    </div>
                    <div className="owner-text">
                      <span id="owner-infos-title">E-mail</span>
                      <span id="email">{pet.user.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              {pet.available ? (
                <p className="status-text red">Adoção em andamento</p>
              ) : (
                <p className="status-text green">
                  Parabéns por concluir a adoção
                </p>
              )}
              {pets.length === 0 && <p>Ainda não há pets adotados!</p>}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Adoptions;
