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
    let name = this.props.name ? '?firstName=' + this.props.name[0] + '&lastName=' + this.props.name[1] : '';
    let number = this.state.number ? this.state.number : 0;
    let toggleOn = this.props.toggleOn ? '&limitTo=[explicit]' : '';
    fetch('http://api.icndb.com/jokes/random/' + number + name + toggleOn)
      .then((stuff) => stuff.json())
      .then((moreStuff) => this.props.grabJokes(moreStuff.value));
  }

  render(){
    let children = '';
    if(this.props.children){
      children = React.cloneElement(this.props.children, {number: this.state.number, jokes: this.props.jokes, grabFav: this.props.grabFav, favs: this.props.favs})
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
        <Link to={'/favs'}>
          <Button
            style='favs'
            name='Favorites'
          />
        </Link>
        {children}
      </section>
    )
  }
}
