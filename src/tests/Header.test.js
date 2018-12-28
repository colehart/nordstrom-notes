import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../containers/Header';
import { mockDefaultState, mockFullState } from './testMocks';

describe('Header', () => {
  describe('Header Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('matches error snapshot', () => {
      wrapper = shallow(<Header caughtError={'There is an error'}/>)

      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('matchStateToProps', () => {
    it('should parse caughtError from state', () => {
      const expected1 = ''

      const mappedProps1 = mapStateToProps(mockDefaultState)
      expect(mappedProps1.caughtError).toEqual(expected1)

      const expected2 = 'Error: Bad API Key.'
      const mappedProps2 = mapStateToProps(mockFullState)
      expect(mappedProps2.caughtError).toEqual(expected2)
    })
  })
})
