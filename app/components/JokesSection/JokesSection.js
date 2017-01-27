import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';
import Button from '../Button/Button';

export default class JokesSection extends Component{
  render(){
    let jokes;
    if(this.props.jokes){
      jokes = this.props.jokes.map((joke) => {
        let final = APIScrubber(joke.joke);
        return <div><p>{final}</p><Button/></div>;
      })
    }else{
      jokes = 'Click Get Jokes';
    }
    return(
      <div className='jokeCard'>
        {jokes}
      </div>
    )
  }
}
