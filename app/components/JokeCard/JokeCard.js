import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';
import Button from '../Button/Button';
import './JokeCard-style';

const JokeCard = ({info, grabFav}) => {
    return(
      <div className='joke-card'>
        {info}<br></br>
        <Button style='star' name='★' onClick={() => grabFav(info)}/>
      </div>
    )
}

JokeCard.propTypes = {
  info: React.PropTypes.string,
  grabFav: React.PropTypes.func,
}

export default JokeCard;
