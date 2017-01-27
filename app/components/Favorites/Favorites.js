import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';
import Button from '../Button/Button';
import JokeCard from '../JokeCard/JokeCard';

export default class Favorites extends Component{
  render(){
    let favs;
    if(this.props.favs){
      favs = this.props.favs.map((fav) => {
        return <JokeCard info={fav} grabFav={console.log('bla')}/>
      })
    }else{
      favs = 'There are no favorites';
    }
    return(
      <div className='jokeCard'>
        {favs}
      </div>
    )
  }
}

Favorites.propTypes = {
  favs: React.PropTypes.string,
}
