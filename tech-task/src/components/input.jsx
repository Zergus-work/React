import React from "react";

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  type = "text",
}) => {
  return (
    <React.Fragment>
      <div>
        <input
          onChange={onChange}
          value={value[name]}
          name={name}
          type={type}
          id={name}
          placeholder={placeholder}
        />
        {error && <div className="container-error">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;
