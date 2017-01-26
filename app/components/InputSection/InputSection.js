import React, {Component} from 'react';
import {Link} from 'react-router';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './InputSection-style';

export default class InputSection extends Component{
  constructor(){
    super();
    this.state = {
      number: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    fetch('http://api.icndb.com/jokes/random/' + this.state.number)
      .then((stuff) => stuff.json())
      .then((moreStuff) => this.props.grabJokes(moreStuff.value));
      // .then((moreMoreStuff) => this.setState({joke: moreMoreStuff}));
  }

  render(){
    let children = '';
    if(this.props.children){
      children = React.cloneElement(this.props.children, {number: this.state.number, jokes: this.props.jokes})
    }
    return(
      <section>
        <Link to={'/jokes'}>
          <Button
            style='new-jokes'
            name='New Jokes'
            onClick={this.handleClick}/>
        </Link>
        <Input
          handleChange={(e) => this.setState({number: e.target.value})}
          type='number'
          value={this.state.number}/>
        <Button
          style='favs'
          name='Favorites'/>
        {children}
      </section>
    )
  }
}
