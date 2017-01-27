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

export default JokeCard;
