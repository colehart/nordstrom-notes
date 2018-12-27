import { isLoading, caughtError, addNote } from '../reducers/notesReducer';
import * as Actions from '../actions';
import { mockErrorMessage, mockTag, mockText, mockNote } from './testMocks'

describe('storiesReducer', () => {
  describe('isLoading', () => {
    it('should return the default state', () => {
      const expected = false;
      const result = isLoading(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with isLoading set to true', () => {
      const initialState = false;
      const expected = true;

      const result = isLoading(initialState, Actions.isLoading(true))
      expect(result).toEqual(expected);
    })
  })

  describe('caughtError', () => {
    it('should return the default state', () => {
      const expected = ''
      const result = caughtError(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with caught error message', () => {
      const initialState = ''
      const expected = mockErrorMessage;

      const result = caughtError(initialState, Actions.caughtError(mockErrorMessage))
      expect(result).toEqual(expected);
    })
  })

  describe('addNote', () => {
    it('should return the default state', () => {
      const expected = []
      const result = addNote(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with notes', () => {
      const initialState = []
      const expected = [mockNote];

      const result = addNote(initialState, Actions.addNote(mockTag, mockText))
      expect(result).toEqual(expected);
    })
  })
})