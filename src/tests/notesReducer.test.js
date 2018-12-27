import { isLoading, caughtError, SetStories } from '../reducers/notesReducer';
import * as Actions from '../actions';
import { mockErrorMessage, mockTag, mockText } from './testMocks'

describe('storiesReducer', () => {
  describe('isLoading', () => {
    it('should return the default state', () => {
      const expected = false;
      const result = isLoading(undefined, {})

      expect(result).toEqual(expected)
    })
  })
})