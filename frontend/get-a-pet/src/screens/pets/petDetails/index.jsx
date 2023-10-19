import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { Link, useParams } from "react-router-dom";
import api from "../../../utils/api";

import useFlashMessage from "../../../hooks/useFlashMessage";
import Message from "../../../components/layout/message";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const { id } = useParams();

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);

  const schedule = async () => {
    let msgType = "success";

    const data = await api
      .patch(`pets/schedule/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <Container>
      {pet.name && (
        <section className="section-2">
          <h2>MAIS DETALHES</h2>

          <div className="message">
            <Message />
          </div>

          <div className="cards-container">
            <div className="card">
              <div className="img-container">
                <img
                  src={`https://getapet-api-0915272b9344.herokuapp.com/images/pets/${pet.images}`}
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
                  <div className="border"></div>
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
                  {token ? (
                    <button onClick={schedule} id="schedule-button">
                      Solicitar uma Visita
                    </button>
                  ) : (
                    <p id='newUserVisit'>
                      Você precisa <Link to="/Register">criar uma conta</Link>{" "}
                      para solicitar uma visita.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Container>
  );
};

export default PetDetails;
