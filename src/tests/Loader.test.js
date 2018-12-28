import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from '../components/Loader'

describe('Loader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})