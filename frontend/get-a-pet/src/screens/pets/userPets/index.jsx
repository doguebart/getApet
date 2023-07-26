import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import api from "../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";

const UserPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [petToRemove, setPetToRemove] = useState(null);

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

  const removePet = async (id) => {
    let msgType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id !== id);
        setPets(updatedPets);
        return response.data;
      })
      .catch((error) => {
        msgType = "error";
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  const handleRemovePetConfirmation = (id) => {
    setShowConfirmation(true);
    setPetToRemove(id);
  };

  const cancelPetRemoval = () => {
    setShowConfirmation(false);
    setPetToRemove(null);
  };

  const confirmPetRemoval = () => {
    removePet(petToRemove);
    setShowConfirmation(false);
    setPetToRemove(null);
  };

  return (
    <Container>
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
                  {pet.available ? (
                    <>{pet.adopter && <button>CONCLUIR ADOÇÃO</button>}</>
                  ) : (
                    <p>Pet já adotado!</p>
                  )}
                  <div className="controll">
                    <Link to={`/pets/edit/${pet._id}`}>
                      <FaEdit className="icon edit" />
                    </Link>
                    <button
                      onClick={() => {
                        handleRemovePetConfirmation(pet._id);
                      }}
                    >
                      <FaTrash className="icon trash" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Tem certeza que deseja remover este pet?</p>
          <button onClick={confirmPetRemoval}>Sim</button>
          <button onClick={cancelPetRemoval}>Não</button>
        </div>
      )}
    </Container>
  );
};

export default UserPets;
