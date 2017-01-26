import React from 'react';


const Input = ({handleChange, type, value}) => {
  return (
    <input type={type} value={value} onChange={(e) => handleChange(e)}></input>
  );
}

export default Input;
