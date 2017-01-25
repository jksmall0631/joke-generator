import React from 'react';
import './button-style';

const Button = ({style, name, handleClick}) => {
  return (
    <button className={style} onClick={() => handleClick()}>{name}</button>
  );
}

export default Button;
