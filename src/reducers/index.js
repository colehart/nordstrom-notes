import { combineReducers } from 'redux'
import { isLoading, caughtError, addNotes, newNoteAdded } from './notesReducer'

const rootReducer = combineReducers({
  isLoading,
  caughtError,
  notes: addNotes,
  newNoteAdded,
})

export default rootReducer;
