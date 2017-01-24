import React from 'react';
import './button-style';

const Button = (props) => {
  return (
    <button id='settings' onClick={() => props.handleClick()}>Click Me</button>
  );
}

export default Button;
