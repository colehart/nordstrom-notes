import React from 'react'
import { shallow } from 'enzyme'
import { Main, mapStateToProps } from '../containers/Main'
import { mockMatchForm, mockMatchList, mockDefaultState, mockFullState } from './testMocks'

describe('Main', () => {
  describe('Main component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Main
                          isLoading={false}
                          match={mockMatchForm}
                        />)
    })

    it('should match the snapshot for NoteForm', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for NotesList', () => {
      wrapper = shallow(<Main
                    isLoading={false}
                    match={mockMatchList}
                  />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for Loader', () => {
      wrapper = shallow(<Main
                    isLoading={true}
                    match={mockMatchList}
                  />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('matchStateToProps', () => {
    it('should parse caughtError from state', () => {
      const expected1 = false

      const mappedProps1 = mapStateToProps(mockDefaultState)
      expect(mappedProps1.isLoading).toEqual(expected1)

      const expected2 = true
      const mappedProps2 = mapStateToProps(mockFullState)
      expect(mappedProps2.isLoading).toEqual(expected2)
    })
  })
})