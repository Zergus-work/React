import React, { Component } from "react";

const Input = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      onChange={onChange}
      value={value[name]}
      name={name}
      id={name}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
