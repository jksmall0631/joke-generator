import React, {Component} from 'react';
import APIScrubber from '../Helpers/scrubber';
import Button from '../Button/Button';

const JokeCard = ({info, grabFav}) => {
    return(
      <div>
        {info}
        <Button onClick={() => grabFav(info)}/>
      </div>
    )
}

export default JokeCard;
