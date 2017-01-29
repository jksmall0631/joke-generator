import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'
import InputSection from './InputSection';
import Button from '../Button/Button';
import Input from '../Input/Input';

describe('<InputSection />', () => {

  it('should display two buttons component', function() {
    const wrapper = shallow(<InputSection />)
    expect(wrapper.find('Button')).to.have.length(2)
  })

  it('should display an input component', function() {
    const wrapper = shallow(<InputSection />)
    expect(wrapper.find('Input')).to.have.length(1)
  })

  it('should call fakeFunction on onClick', () => {
    const fakeFunction = sinon.spy()
    const wrapper = mount(<InputSection onClick={ fakeFunction } />)
    assert.equal(fakeFunction.calledOnce, false)
    wrapper.find('button').simulate('click')
    assert.equal(fakeFunction.calledOnce, true)
  })
});
