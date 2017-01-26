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
        <Button
          style='set'
          name='set'/>
        <Button
          style='reset'
          name='reset'/>
        <p>Parental Controls:</p>
        ON<input type='radio' name='parental'></input>
        OFF<input type='radio' name='parental' checked></input>
      </div>
    )
  }
}
