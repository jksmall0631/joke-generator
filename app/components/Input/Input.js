import React from 'react';
import './Input-style';


const Input = ({style, handleChange, type, value}) => {
  return (
    <input className={style} type={type} value={value} onChange={(e) => handleChange(e)}></input>
  );
}

export default Input;
