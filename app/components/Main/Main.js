import React, {Component} from 'react';

export default class Main extends Component{
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

  APIScrubber(api){
    let scrubbed = api.replace(/&quot;/g, '"');
    return scrubbed;
  }

  render(){
    return(
      <p>{this.state.joke}</p>
    )
  }
}
