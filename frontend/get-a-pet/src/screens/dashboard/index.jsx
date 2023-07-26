import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import api from "../../utils/api";

import Input from "../../components/form/inputs/index";
import Button from "../../components/form/button";
import useFlashMessage from "../../hooks/useFlashMessage";
import Message from "../../components/layout/message";

const DashBoard = () => {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  const onFileChange = (e) => {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let msgType = "success";

    const formData = new FormData();

    const userFormData = await Object.keys(user).forEach((key) =>
      formData.append(key, user[key])
    );

    formData.append("user", userFormData);

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "Multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
        msgType = "error";
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <Container>
      <Message />
      <div className="form-container">
        <h2>EDITAR MINHAS INFORMAÇÕES</h2>
        <div className="user-image-container">
          {(user.image || preview) && (
            <img
              src={
                preview
                  ? URL.createObjectURL(preview)
                  : `http://localhost:5000/images/users/${user.image}`
              }
              alt={user.name}
            />
          )}
        </div>
        <form>
          <Input type="file" name="image" onChange={onFileChange} />
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="NOME"
            value={user.name || ""}
          />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="E-MAIL"
            value={user.email || ""}
          />
          <Input
            type="text"
            name="phone"
            placeholder="TELEFONE"
            onChange={handleChange}
            value={user.phone || ""}
          />
          <h2>ALTERAR SENHA</h2>
          <Input
            type="password"
            name="password"
            placeholder="SENHA"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="CONFIRME SUA SENHA"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Salvar</Button>
        </form>
      </div>
    </Container>
  );
};

export default DashBoard;
