import React from "react";

export default function Input({
  labelText,
  type,
  name,
  value,
  update,
  styleInput,
}) {
  return (
    <>
      <label htmlFor={labelText} className="styleLabel">
        {labelText}
      </label>
      <input
        className="styleInput"
        id={labelText}
        type={type}
        name={name}
        value={value}
        onChange={update}
      />
    </>
  );
}
