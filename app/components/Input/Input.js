import React from 'react';


const Input = ({handleChange}) => {
  return (
    <input type='number' onChange={(e) => handleChange(e)}></input>
  );
}

export default Input;
