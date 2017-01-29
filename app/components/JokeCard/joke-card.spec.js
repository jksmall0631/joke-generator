import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import JokeCard from './JokeCard';

describe('<JokeCard />', () => {

  it('renders a button component', () => {
    const wrapper = shallow(<JokeCard />)
    assert.equal(wrapper.type(), 'button');
  });

});
