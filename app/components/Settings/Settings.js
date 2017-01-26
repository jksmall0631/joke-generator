import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default class Settings extends Component{
  constructor(){
    super();
    this.state = {
      jokes: '',
    }
  }

  render(){
    return(
      <div>
        <p>Set Name:</p>
        <Input />
        <Button />
        <Button />
      </div>
    )
  }
}
