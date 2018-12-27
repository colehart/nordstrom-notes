export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const caughtError = (errorMessage) => ({
  type: 'CAUGHT_ERROR',
  errorMessage,
})

export const addNote = (tag, text) => ({
  type: 'ADD_NOTE',
  tag,
  text,
})