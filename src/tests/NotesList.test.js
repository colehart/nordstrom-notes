import React from 'react';
import { shallow } from 'enzyme';
import { NotesList } from '../containers/NotesList';

describe('NotesList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotesList />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})