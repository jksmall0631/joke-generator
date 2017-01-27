import React, {Component} from 'react';
import './header-style';
import Button from '../Button/Button';
import {Link} from 'react-router';

export default class Header extends Component{
  constructor(){
    super();
    this.state = {
      switchSettings: false,
    }
  }
  render(){
    return (
      <div className="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Link to={this.state.switchSettings ? '/home' : '/settings'}>
          <Button
            style='settings'
            name={this.state.switchSettings ? 'jokes' : 'settings'}
            onClick={() => this.setState({switchSettings: this.state.switchSettings ? false : true})}/>
        </Link>
      </div>
    );
  }
}
