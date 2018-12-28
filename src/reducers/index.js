import { combineReducers } from 'redux'
import { isLoading, caughtError, addNotes, newNoteCount } from './notesReducer'

const rootReducer = combineReducers({
  isLoading,
  caughtError,
  notes: addNotes,
  newNoteCount,
})

export default rootReducer;
