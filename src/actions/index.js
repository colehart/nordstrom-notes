export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const caughtError = errorMessage => ({
  type: 'CAUGHT_ERROR',
  errorMessage,
})

export const addNotes = (tag, text) => ({
  type: 'ADD_NOTES',
  tag,
  text,
})

export const newNoteCount = () => ({
  type: 'NEW_NOTE_COUNT'
})