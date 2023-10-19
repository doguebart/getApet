import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import Select from "../../../components/form/inputs/select";
import Input from "../../../components/form/inputs/index";
import Button from "../../../components/form/button";
import useFlashMessage from "../../../hooks/useFlashMessage";
import Message from "../../../components/layout/message";

const EditPet = () => {
  const [pet, setPet] = useState({});
  const [preview, setPreview] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const colors = [
    "Branco",
    "Preto",
    "Marrom",
    "Dourado",
    "Creme",
    "Cinza",
    "Fulvo",
    "Tricolor",
    "Merle",
    "Tigrado",
  ];
  const sex = ["Macho", "Fêmea"];
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((Response) => {
        setPet(Response.data.pet);
      });
  }, [token, id]);

  const onFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSex = (e) => {
    setPet({ ...pet, sex: e.target.value });
  };

  const handleColor = (e) => {
    setPet({ ...pet, color: e.target.value });
  };

  const handleSubmit = async (e) => {
    let msgType = "success";

    const formData = new FormData();

    const petFormData = await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append(`images`, pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    formData.append("pet", petFormData);

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
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
      <Message />
      <div className="form-container">
        <h2>EDITAR INFORMAÇÕES</h2>
        <div className="pet-image-container">
          {preview.length > 0
            ? preview.map((previewUrl, index) => (
                <img
                  src={previewUrl}
                  alt={pet.name}
                  key={`${pet.name}+${index}`}
                />
              ))
            : pet.images &&
              pet.images.map((image, index) => (
                <img
                  src={`https://getapet-api-0915272b9344.herokuapp.com/images/pets/${image}`}
                  alt={pet.name}
                  key={`${pet.name}+${index}`}
                />
              ))}
        </div>
        <form>
          <Input
            type="file"
            name="images"
            multiple={true}
            onChange={onFileChange}
          />
          <Input
            type="text"
            name="name"
            placeholder="NOME"
            onChange={handleChange}
            value={pet.name || ""}
          />
          <Input
            type="number"
            name="age"
            placeholder="IDADE"
            onChange={handleChange}
            value={pet.age || ""}
          />
          <Input
            type="text"
            name="weight"
            placeholder="PESO"
            onChange={handleChange}
            value={pet.weight || ""}
          />
          <Select
            name="sex"
            onChange={handleSex}
            options={sex}
            placeholder="SELECIONE O SEXO"
            value={pet.sex || ""}
          />
          <Select
            name="color"
            onChange={handleColor}
            options={colors}
            placeholder="SELECIONE A COR"
            value={pet.color || ""}
          />
          <Button onClick={handleSubmit}>SALVAR</Button>
        </form>
      </div>
    </Container>
  );
};

export default EditPet;
