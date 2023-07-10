import React from "react";
import { Container } from "./styles";

const Input = (props) => {
  const { type, name, value, onChange, multiple, placeholder } = props;

  return (
    <Container>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...(multiple ? { multiple } : null)}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
