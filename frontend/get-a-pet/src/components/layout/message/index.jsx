import { React, useState, useEffect } from "react";
import { Container, Success, Error } from "./styles";
import bus from "../../../utils/bus";

const Message = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("false");
  const [type, setType] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setIsVisible(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    });
  }, []);

  return (
    isVisible && (
      <Container>
        {type === "success" && <Success>{message}</Success>}
        {type === "error" && <Error>{message}</Error>}
      </Container>
    )
  );
};

export default Message;
