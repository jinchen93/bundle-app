import React from "react";

const Input = ({ value, handleChange, placeholder }) =>
  <div className="group">
    <input
      type="text"
      name={placeholder.toLowerCase()}
      value={value}
      onChange={handleChange}
    />
    <label>
      {placeholder}
    </label>
  </div>;

export default Input;
