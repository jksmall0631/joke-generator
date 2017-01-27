
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import Button from './Button';

describe('<Button />', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('should call fakeFunction on onClick', () => {
    const fakeFunction = sinon.spy()
    const wrapper = mount(<Button className='style' onClick={ fakeFunction } />)
    assert.equal(fakeFunction.calledOnce, false)
    wrapper.find('button').simulate('click')
    assert.equal(fakeFunction.calledOnce, true)
  })

  it('should have passed in prop for text', () => {
    const wrapper = mount(<Button text='New Jokes' />)
    expect(wrapper.props().text).to.equal('New Jokes');
  })

  it('should have passed in prop for className', () => {
    const wrapper = mount(<Button className='new-jokes-btn' />)
    expect(wrapper.props().className).to.equal('new-jokes-btn');
  })

});
