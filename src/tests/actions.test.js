import * as Actions from '../actions';

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
    const mockErrorMessage = 'Error: path not found'
    const expectedAction = {
      type: 'CAUGHT_ERROR',
      errorMessage: mockErrorMessage
    }
    const result = Actions.caughtError(mockErrorMessage)

    expect(result).toEqual(expectedAction);
  })
  it('should have a type of ADD_NOTE', () => {
    const mockTag = 'Work'
    const mockText = 'This is my note.'
    const expectedAction = {
      type: 'ADD_NOTE',
      tag: mockTag,
      text: mockText
    }
    const result = Actions.addNote(mockTag, mockText)

    expect(result).toEqual(expectedAction);
  })
})