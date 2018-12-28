import React from 'react';
import { shallow } from 'enzyme';
import { NoteForm } from '../containers/NoteForm';

describe('NoteForm', () => {
  describe('NoteForm Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<NoteForm />)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })
})