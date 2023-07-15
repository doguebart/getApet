import React from "react";
import { Container } from "./styles";

const Select = (props) => {
  const { placeholder, name, options, onChange, value } = props;

  return (
    <Container>
      <select
        name={name}
        onChange={onChange}
        value={value || ""}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
