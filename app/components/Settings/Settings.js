import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Settings-style';

export default class Settings extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
    }
  }

  render(){
    return(
      <div className='setting'>
        <div className='name'>
          <p>Set Name:</p>
          <Input
            style='name'
            handleChange={(e) => this.setState({name: e.target.value})}
            type='text'
            value={this.state.name}/>
          <Button
            style='set'
            name='set'
            onClick={() => this.props.grabName(this.state.name)}/>
          <Button
            style='reset'
            name='reset'
            onClick={() => this.props.grabName('Chuck Norris')}/>
        </div>
        <div className='parent'>
          <p>Parental Controls:</p>
          ON<input type='radio' name='parental' onChange={() => this.props.grabToggleOn()}></input>
          OFF<input type='radio' name='parental' onChange={() => this.props.grabToggleOff()} defaultChecked={true}></input>
        </div>
      </div>
    )
  }
}
