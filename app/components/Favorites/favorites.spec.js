import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'
import Favorites from './Favorites';
import JokeCard from '../JokeCard/JokeCard';

describe('<Favorites />', () => {

  it('should display a JokeCard component', function() {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find('JokeCard')).to.have.length(1)
  })


});
