import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'
import Input from './Input';

describe('<Input />', () => {

  it('should display an input component', function() {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('input')).to.have.length(1)
  })
});
