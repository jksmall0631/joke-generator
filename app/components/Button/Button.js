import React from 'react';
import './button-style';

const Button = ({style, name, onClick}) => {
  return (
    <button className={style} onClick={onClick}>{name}</button>
  );
}

Button.propTypes = {
  style: React.PropTypes.string,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default Button;
