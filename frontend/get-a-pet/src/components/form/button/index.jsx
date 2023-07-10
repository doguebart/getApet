import React from "react";
import { Container } from "./styles";

const Button = (props) => {
  const { children, onClick } = props;

  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export default Button;
