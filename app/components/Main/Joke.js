import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';

export default class Joke extends Component{
  constructor(){
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount(){
    fetch('http://api.icndb.com/jokes/random')
      .then((stuff) => stuff.json())
      .then((moreStuff) => this.APIScrubber(moreStuff.value.joke))
      .then((moreMoreStuff) => this.setState({joke: moreMoreStuff}));
  }

  render(){
    return(
      <p>{this.state.joke}</p>
    )
  }
}
