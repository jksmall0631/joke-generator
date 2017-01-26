import React from 'react';
import './header-style';
import Button from '../Button/Button';
import {Link} from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <h1>Chuck Norris Joke Machine</h1>
      <Link to={'/settings'}>
        <Button
          style='settings'
          name='settings'
          handleClick={() => logStuff()} />
      </Link>
    </div>
  );
}

export default Header;
