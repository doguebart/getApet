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
      <Link to="/AddPet">Cadastrar novo pet</Link>
      {pets.length > 0 && <p>Pets cadastrados</p>}
      {pets.length === 0 && <p>Nenhum pet cadastrado!</p>}
      {pets.map((pet) => (
        <>
          <p key={pet.name}>{pet.name}</p>
        </>
      ))}
    </Container>
  );
};

export default UserPets;
