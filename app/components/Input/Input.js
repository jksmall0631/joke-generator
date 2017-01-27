import React from 'react';
import './Input-style';


const Input = ({style, handleChange, type, value}) => {
  return (
    <input className={style} type={type} value={value} onChange={(e) => handleChange(e)}></input>
  );
}

Input.propTypes = {
  style: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
}

export default Input;
