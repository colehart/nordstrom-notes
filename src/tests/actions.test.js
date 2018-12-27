import * as Actions from '../actions';
import { mockErrorMessage, mockTag, mockText } from './testMocks'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = Actions.isLoading(true);

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of CAUGHT_ERROR', () => {
    const expectedAction = {
      type: 'CAUGHT_ERROR',
      errorMessage: mockErrorMessage
    }
    const result = Actions.caughtError(mockErrorMessage)

    expect(result).toEqual(expectedAction);
  })
  it('should have a type of ADD_NOTES', () => {
    const expectedAction = {
      type: 'ADD_NOTES',
      tag: mockTag,
      text: mockText
    }
    const result = Actions.addNotes(mockTag, mockText)

    expect(result).toEqual(expectedAction);
  })
})