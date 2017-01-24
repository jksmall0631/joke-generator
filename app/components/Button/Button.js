import React from 'react';
import './button-style';

const Button = (props) => {
  return (
    <button id='settings' onClick={() => props.handleClick()}>Settings</button>
  );
}

export default Button;
