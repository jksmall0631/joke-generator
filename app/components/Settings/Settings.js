import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default class Settings extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
    }
  }

  render(){
    return(
      <div>
        <p>Set Name:</p>
        <Input
          handleChange={(e) => this.setState({name: e.target.value})}
          type='text'
          value={this.state.name}/>
        <Button
          style='set'
          name='set'
          onClick={() => this.handleClick}/>
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
