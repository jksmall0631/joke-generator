import React, {Component} from 'react';
import Header from '../Header/Header';
import Joke from '../Joke/Joke';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      jokes: null,
      toggleOn: false,
    }
    this.grabName = this.grabName.bind(this);
    this.grabJokes = this.grabJokes.bind(this);
    this.grabToggleOn = this.grabToggleOn.bind(this);
    this.grabToggleOff = this.grabToggleOff.bind(this);
  }

  grabName(name){
    let array = name.split(' ');
    this.setState({name: array});
  }

  grabJokes(jokes){
    this.setState({jokes: jokes});
  }

  grabToggleOn(){
    console.log('bla');
    this.setState({toggleOn: true});
  }

  grabToggleOff(){
    console.log('bloo');
    this.setState({toggleOn: false});
  }

  render(){
    return (
      <section>
        <Header newName={this.state.name}/>
        <Joke newName={this.state.name}/>
        <div>
          {React.cloneElement(this.props.children, {
            grabName: this.grabName,
            grabJokes: this.grabJokes,
            grabToggleOn: this.grabToggleOn,
            grabToggleOff: this.grabToggleOff,
            jokes: this.state.jokes,
            name: this.state.name,
            toggleOn: this.state.toggleOn,
            })}
        </div>
      </section>
    );
  }
}
