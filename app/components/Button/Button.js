import React from 'react';
import './button-style';

const Button = ({style, name, onClick}) => {
  return (
    <button className={style} onClick={onClick}>{name}</button>
  );
}

export default Button;
