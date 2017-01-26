import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';

export default class JokesSection extends Component{
  render(){
    let jokes;
    if(this.props.jokes){
      jokes = this.props.jokes.map((joke) => {
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
