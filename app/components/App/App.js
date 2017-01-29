import React, {Component} from 'react';
import Header from '../Header/Header';
import Joke from '../Joke/Joke';

//todo: remove blue borders after button click, make favs stay,
//position stars properly, toggle star class on click, testing

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      jokes: null,
      toggleOn: false,
      favs: [],
    }
    this.grabName = this.grabName.bind(this);
    this.grabJokes = this.grabJokes.bind(this);
    this.grabToggleOn = this.grabToggleOn.bind(this);
    this.grabToggleOff = this.grabToggleOff.bind(this);
    this.grabFav = this.grabFav.bind(this);
  }

  grabName(name){
    let array = name.split(' ');
    this.setState({name: array});
  }

  grabJokes(jokes){
    this.setState({jokes: jokes});
  }

  grabToggleOn(){
    this.setState({toggleOn: true});
  }

  grabToggleOff(){
    this.setState({toggleOn: !this.state.toggleOn});
  }

  grabFav(joke){
    let array = this.state.favs;
    array.push(joke);
    this.setState({favs: array});
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
            grabFav: this.grabFav,
            jokes: this.state.jokes,
            name: this.state.name,
            toggleOn: this.state.toggleOn,
            favs: this.state.favs,
            })}
        </div>
      </section>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
}
