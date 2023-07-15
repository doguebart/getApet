import React, { useState } from "react";
import { Container } from "./styles";

import api from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";

import Input from "../../../components/form/inputs";
import Button from "../../../components/form/button";
import Select from "../../../components/form/inputs/select";
import Message from "../../../components/layout/message";

const AddPet = () => {
  const [pet, setPet] = useState({});
  const [imageFiles, setImageFiles] = useState([]);
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
  const [preview, setPreview] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

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
    e.preventDefault();

    let msgType = "success";

    const formData = new FormData();

    imageFiles.forEach((file) => {
      formData.append("images", file);
    });

    Object.keys(pet).forEach((key) => {
      formData.append(key, pet[key]);
    });

    const data = await api
      .post("pets/create", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        return response.data;
      })
      .catch((error) => {
        msgType = "error";
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);

    if (msgType !== "error") {
      navigate("/UserPets");
    }
  };

  return (
    <Container>
      <div className="form-container">
        <Message />

        <h2>CADASTRO DE PET PARA ADOÇÃO</h2>

        <div className="pet-image-container">
          {preview.length > 0 &&
            preview.map((image, index) => (
              <img src={image} alt={`${pet.name} + ${index}`} key={index} />
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
          <Button onClick={handleSubmit}>CADASTRAR</Button>
        </form>
      </div>
    </Container>
  );
};

export default AddPet;
