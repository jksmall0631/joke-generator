import React, {Component} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class InputSection extends Component{
  constructor(){
    super();
    this.state = {
      number: null,
    }
  }

  render(){
    return(
      <section>
        <Button
          style='new-jokes'
          name='New Jokes'
          />
        <Input
          handleChange={(e) => this.setState({number: e.target.value})}
          value={this.state.number}/>
        <Button
          style='favs'
          name='Favorites'/>
      </section>
    )
  }
}
