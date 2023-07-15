import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import api from "../../../utils/api";

const UserPets = () => {
  const [pets, setPets] = useState([]);

  return (
    <Container>
      <Link to="/AddPet">Cadastrar novo pet</Link>
      {pets.length > 0 && <p>Pets cadastrados</p>}
      {pets.length === 0 && <p>Nenhum pet cadastrado!</p>}
    </Container>
  );
};

export default UserPets;
