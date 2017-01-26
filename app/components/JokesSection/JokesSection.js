import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';

export default class JokesSection extends Component{
  constructor(){
    super();
    this.state = {
      jokes: null,
    }
  }

  componentWillMount(){
    fetch('http://api.icndb.com/jokes/random/' + this.props.number)
      .then((stuff) => stuff.json())
      .then((moreStuff) => this.setState({jokes: moreStuff.value}));
  }

  render(){
    let jokes;
    if(this.state.jokes){
      jokes = this.state.jokes.map((joke) => {
        let final = APIScrubber(joke.joke);
        return <p>{final}</p>;
      })
    }
    return(
      <div>
        {jokes}
      </div>
    )
  }
}
