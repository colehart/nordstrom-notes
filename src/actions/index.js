export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const caughtError = errorMessage => ({
  type: 'CAUGHT_ERROR',
  errorMessage,
})

export const addNotes = (tag, text, date) => ({
  type: 'ADD_NOTES',
  tag,
  text,
  date,
})

export const newNoteAdded = bool => ({
  type: 'NEW_NOTE_ADDED',
  newNoteAdded: bool,
})