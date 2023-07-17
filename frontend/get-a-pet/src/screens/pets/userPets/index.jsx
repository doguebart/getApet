import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import api from "../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";

const UserPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => setPets(response.data.pets))
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <Container>
      {/* <Link to="/AddPet">Cadastrar novo pet</Link> */}
      {pets.length === 0 && <p>Nenhum pet cadastrado!</p>}
      <section className="section-2">
        <h2>MEUS ANIMAIS</h2>

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
                  <Link to="">SABER MAIS</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default UserPets;
