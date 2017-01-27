import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';
import Button from '../Button/Button';
import JokeCard from '../JokeCard/JokeCard';

export default class JokesSection extends Component{
  render(){
    let jokes;
    if(this.props.jokes){
      jokes = this.props.jokes.map((joke) => {
        let final = APIScrubber(joke.joke);
        return <JokeCard key={joke.id} info={final} grabFav={this.props.grabFav}/>;
      })
    }else{
      jokes = 'Click New Jokes';
    }
    return(
      <div className='jokeCard'>
        {jokes}
      </div>
    )
  }
}
